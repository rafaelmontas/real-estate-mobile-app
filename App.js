import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Search, Likes } from './src/screens';
import Tabs from './src/navigation/tabs';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'rgb(255, 255, 255)'}
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={Tabs}/>
        <Stack.Screen name="Likes" component={Likes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
