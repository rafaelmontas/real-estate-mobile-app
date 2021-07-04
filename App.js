import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createFluidNavigator } from 'react-navigation-fluid-transitions';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Search, Likes, SearchAutoComplete } from './src/screens';
import Tabs from './src/navigation/tabs';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'rgb(255, 255, 255)'}
};

// const forFade = ({ current }) => ({
//   cardStyle: {
//     opacity: 1,
//   },
// });

const App = () => {
  const [inputText, setInputText] = useState('');
  const [province, setProvince] = useState('');
  const [sector, setSector] = useState('');
  const [listingType, setListingType] = useState('sale');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [propertyType, setPropertyType] = useState(['apartment', 'house', 'villa', 'penthouse']);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // http://192.168.1.17:5000
    // https://www.hauzzy.com
    fetch('http://192.168.1.17:5000/api/properties')
    .then(response => response.json())
    .then(res => console.log(res));
  }, [])

  const searchListings = (province, sector, listingType, minPrice, maxPrice, bedrooms, bathrooms, propertyType) => {
    fetch(`http://192.168.1.17:5000/api/properties?province=${province}&sector=${sector}&listing_type=${listingType}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&property_type=${propertyType}`)
      .then(response => response.json())
      .then(res => {
        setListings(res.properties)
        console.log(res)
      });
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs">
          {() => <Tabs listings={listings} inputText={inputText}/>}
        </Stack.Screen>
        <Stack.Screen name="SearchAutoComplete"
                      options={{
                        cardStyleInterpolator: () =>  ({cardStyle: {opacity: 1}}),
                        gestureEnabled: false
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
        </Stack.Screen>
        {/* <Stack.Screen name="Search" component={Search}/> */}
        {/* <Stack.Screen name="Likes" component={Likes}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <SearchAutoComplete/>
  )
}

export default App;
