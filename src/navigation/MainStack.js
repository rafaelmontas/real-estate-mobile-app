import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SearchAutoComplete, Filter } from '../screens';
import HomeStackScreen from './HomeStack';

const MainStack = createStackNavigator();

const MainStackScreen = (props) => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [province, setProvince] = useState('');
  const [sector, setSector] = useState('');
  const [listingType, setListingType] = useState('sale');
  const [propertyType, setPropertyType] = useState(['apartment', 'house', 'villa', 'penthouse']);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   // http://192.168.1.17:5000
  //   // https://www.hauzzy.com
  //   fetch('http://192.168.1.17:5000/api/properties')
  //   .then(response => response.json())
  //   .then(res => console.log(res));
  // }, [])
  useEffect(() => {
    console.log(propertyType)
  }, [propertyType])

  const searchListings = (province, sector, listingType, minPrice, maxPrice, bedrooms, bathrooms, propertyType) => {
    fetch(`http://192.168.1.17:5000/api/properties?province=${province}&sector=${sector}&listing_type=${listingType}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&property_type=${propertyType}`)
      .then(response => response.json())
      .then(res => {
        setListings(res.properties)
        console.log(res)
      });
  }

  return (
    <MainStack.Navigator mode="modal">
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
                            title: '',
                            headerLeftContainerStyle: {paddingLeft: 6},
                            headerRightContainerStyle: {paddingRight: 6},
                            headerLeft: () => <Button title="Cancelar" onPress={() => navigation.goBack()}/>,
                            headerRight: () => <Button title="Limpiar" onPress={() => alert('This is a button!')}/>
                          }}>
          {() => <Filter listingType={listingType}
                         setListingType={setListingType}
                         propertyType={propertyType}
                         setPropertyType={setPropertyType}/>}
        </MainStack.Screen>
    </MainStack.Navigator>
  )
}

export default MainStackScreen;
