import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStackScreen from './src/navigation/MainStack';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'rgb(255, 255, 255)'}
};


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{headerShown: false}} component={MainStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
