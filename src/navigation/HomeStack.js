import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingDetails } from '../screens';
import Tabs from './tabs';
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
        name="ListingDetails"
        options={{
          title: '',
          headerTintColor: 'gray',
          headerBackTitleVisible: false,
          headerRightContainerStyle: {paddingRight: 16},
          headerRight: () => <ListingHeaderRight/>
        }}
        component={ListingDetails}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
