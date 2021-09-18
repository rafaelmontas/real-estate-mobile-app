import React, { useState, useEffect, useContext } from 'react';
import { Button, Text, TouchableOpacity, Pressable } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SearchAutoComplete, Filter, Auth } from '../screens';
import HomeStackScreen from './HomeStack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faImage } from '@fortawesome/free-regular-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../utils/authContext';
import axios from 'axios';
import SplashScreen from 'react-native-splash-screen';

const MainStack = createStackNavigator();

const MainStackScreen = (props) => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [province, setProvince] = useState('');
  const [sector, setSector] = useState('');
  const [listingType, setListingType] = useState('sale');
  const [propertyType, setPropertyType] = useState(['apartment', 'house', 'villa', 'penthouse']);
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [reset, setReset] = useState(false)
  const [listings, setListings] = useState([]);
  const [likes, setLikes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isLoggedIn, user, getUserProfile } = useContext(AuthContext)

  useEffect(() => {
    // console.log(propertyType)
    fetch(`https://www.hauzzy.com/api/properties`)
      .then(response => response.json())
      .then(res => {
        setListings(res.properties)
        setIsLoading(false)
        SplashScreen.hide()
        console.log(res)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      axios.get(`https://www.hauzzy.com/users/${user.id}/likes`)
        .then(res => {
          setLikes(res.data.likes)
          console.log(res.data.likes)
        })
        .catch(err => console.log(err))
    } else {
      setLikes([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const handleLike = async (listingId) => {
    const userJwt = await AsyncStorage.getItem('user-jwt')
    if (isLoggedIn) {
      const body = {listing_id: listingId, user_id: user.id}
      axios.post(`https://www.hauzzy.com/users/${user.id}/likes`, body)
      .then(res => {
        console.log('liked', res.data.msg)
        return axios.get(`https://www.hauzzy.com/users/${user.id}/likes`)
      })
      .then(res => {
        setLikes(res.data.likes)
        console.log(res.data.likes)
        getUserProfile(userJwt)
      })
      .catch(err => console.log(err))
    } else {
      navigation.navigate('AuthScreen', {screen: 'AuthScreen', title: 'Iniciar sesión'})
    }
  }
  const handleLikeDelete = async (likeId) => {
    const userJwt = await AsyncStorage.getItem('user-jwt')
    axios.delete(`https://www.hauzzy.com/users/${user.id}/likes/${likeId}`)
    .then(res => {
      // console.log(res.data.msg)
      return axios.get(`https://www.hauzzy.com/users/${user.id}/likes`)
    })
    .then(res => {
      setLikes(res.data.likes)
      getUserProfile(userJwt)
    })
    .catch(err => console.log(err))
  }

  const handleReset = () => {
    setReset(true)
  }

  const searchListings = (province, sector, listingType, minPrice, maxPrice, bedrooms, bathrooms, propertyType) => {
    axios.get(`https://www.hauzzy.com/api/properties?province=${province}&sector=${sector}&listing_type=${listingType}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&property_type=${propertyType}`)
      .then(res => {
        setListings(res.data.properties)
        console.log(res.data)
        const body = {
          province,
          sector,
          listing_type: listingType,
          min_price: minPrice,
          max_price: maxPrice,
          bedrooms,
          bathrooms,
          property_type: propertyType.join(),
          ha_id: null,
          user_id: isLoggedIn ? user.id : null
        }
        return axios.post("https://www.hauzzy.com/api/searches", body)
      })
      .then(res => console.log("Search Saved!", res.status))
      .catch(err => console.log(err))
  }

  return (
    <MainStack.Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
      }}>
      <MainStack.Screen name="Home" options={{headerShown: false}}>
        {() => <HomeStackScreen
                  listings={listings}
                  isLoading={isLoading}
                  likes={likes}
                  handleLike={handleLike}
                  handleLikeDelete={handleLikeDelete}
                  inputText={inputText}/>}
      </MainStack.Screen>
      <MainStack.Screen name="SearchAutoComplete"
                      options={{
                        cardStyleInterpolator: () =>  ({cardStyle: {opacity: 1}}),
                        gestureEnabled: false,
                        headerShown: false
                      }}>
          {() => <SearchAutoComplete inputText={inputText}
                                     setInputText={setInputText}
                                     setProvince={setProvince}
                                     setSector={setSector}
                                     onSearch={searchListings}
                                     listingType={listingType}
                                     minPrice={minPrice}
                                     maxPrice={maxPrice}
                                     bedrooms={bedrooms}
                                     bathrooms={bathrooms}
                                     propertyType={propertyType}/>}
        </MainStack.Screen>
        <MainStack.Screen name="Filters"
                          // component={Filter}
                          options={{
                            // gestureEnabled: true,
                            cardOverlayEnabled: true,
                            ...TransitionPresets.ModalSlideFromBottomIOS,
                            title: 'Filtros',
                            headerTitleAlign: 'center',
                            headerLeftContainerStyle: {paddingLeft: 15},
                            headerRightContainerStyle: {paddingRight: 15},
                            headerLeft: () => <Pressable onPress={() => navigation.goBack()} style={{padding: 8, paddingLeft: 0}}><Text style={{fontSize: 18, color: '#007AFF'}}>Cancelar</Text></Pressable>,
                            headerRight: () => <Pressable onPress={() => handleReset()} style={{padding: 8, paddingRight: 0}}><Text style={{fontSize: 18, color: '#007AFF'}}>Limpiar</Text></Pressable>
                            // headerLeft: () => <Button title="Cancelar" onPress={() => navigation.goBack()}/>,
                            // headerRight: () => <Button title="Limpiar" onPress={() => handleReset()}/>
                          }}>
          {() => <Filter
                    province={province}
                    sector={sector}
                    listingType={listingType}
                    setListingType={setListingType}
                    propertyType={propertyType}
                    setPropertyType={setPropertyType}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    bedrooms={bedrooms}
                    setBedrooms={setBedrooms}
                    bathrooms={bathrooms}
                    setBathrooms={setBathrooms}
                    reset={reset}
                    setReset={setReset}
                    onSearch={searchListings}/>}
        </MainStack.Screen>
        {!isLoggedIn && (
          <MainStack.Screen
            name="AuthScreen"
            options={({route}) => ({
              title: route.params.title,
              headerStyle: {height: 50},
              headerTintColor: '#444444',
              headerStatusBarHeight: 0,
              headerBackTitleVisible: false,
              headerBackImage: () => <FontAwesomeIcon icon={faTimes} size={20} color={'#444444'} style={{marginLeft: 12}}/>,
              cardOverlayEnabled: true,
              ...TransitionPresets.ModalPresentationIOS,
            })}
            component={Auth}/>
          )}
    </MainStack.Navigator>
  )
}

export default MainStackScreen;
