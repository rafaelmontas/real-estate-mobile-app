import React, { useState, useEffect, useContext } from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SearchAutoComplete, Filter, Auth } from '../screens';
import HomeStackScreen from './HomeStack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faImage } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../utils/authContext';

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
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    // console.log(propertyType)
    fetch(`https://www.hauzzy.com/api/properties`)
      .then(response => response.json())
      .then(res => {
        setListings(res.properties)
        console.log(res)
      });
  }, [])

  const handleReset = () => {
    setReset(true)
  }

  const searchListings = (province, sector, listingType, minPrice, maxPrice, bedrooms, bathrooms, propertyType) => {
    fetch(`https://www.hauzzy.com/api/properties?province=${province}&sector=${sector}&listing_type=${listingType}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&property_type=${propertyType}`)
      .then(response => response.json())
      .then(res => {
        setListings(res.properties)
        console.log(res)
      });
  }

  return (
    <MainStack.Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
      }}>
      <MainStack.Screen name="Home" options={{headerShown: false}}>
        {() => <HomeStackScreen listings={listings} inputText={inputText}/>}
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
                            headerLeftContainerStyle: {paddingLeft: 6},
                            headerRightContainerStyle: {paddingRight: 6},
                            headerLeft: () => <Button title="Cancelar" onPress={() => navigation.goBack()}/>,
                            headerRight: () => <Button title="Limpiar" onPress={() => handleReset()}/>
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
