import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Likes } from '../screens';
import Tabs from './tabs';

const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MainSearch" options={{
                        headerShown: false
                      }}>
        {() => <Tabs listings={props.listings} inputText={props.inputText}/>}
      </HomeStack.Screen>
      <HomeStack.Screen name="ListingDetails" component={Likes}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
