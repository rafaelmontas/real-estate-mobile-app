import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingDetails, ImageSlider } from '../screens';
import Tabs from './tabs';
import ListingStackScreen from './ListingStack';
import ListingHeaderRight from '../components/ListingHeaderRight';

const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MainSearch" options={{
                        headerShown: false
                      }}>
        {() => <Tabs listings={props.listings} inputText={props.inputText}/>}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="ListingStack"
        options={{headerShown: false}}
        component={ListingStackScreen}/>
      {/* <HomeStack.Screen
        name="ListingDetails"
        options={{
          title: '',
          headerTintColor: 'gray',
          headerBackTitleVisible: false,
          headerRightContainerStyle: {paddingRight: 16},
          headerRight: () => <ListingHeaderRight/>
        }}
        component={ListingDetails}/>
        <HomeStack.Screen name="ImageSlider">
          {() => <ImageSlider/>}
        </HomeStack.Screen> */}
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
