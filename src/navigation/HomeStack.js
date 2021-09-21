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
        {() => <Tabs
                  listings={props.listings}
                  isLoading={props.isLoading}
                  likes={props.likes}
                  handleLike={props.handleLike}
                  handleLikeDelete={props.handleLikeDelete}
                  inputText={props.inputText}/>}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="ListingStack"
        options={{headerShown: false}}>
          {() => <ListingStackScreen
                    likes={props.likes}
                    handleLike={props.handleLike}
                    handleLikeDelete={props.handleLikeDelete}
                    platform={props.platform}
                    os={props.os}
                    ipAddress={props.ipAddress}
                    udid={props.udid}/>}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;
