import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStackScreen from './src/navigation/MainStack';
import { AuthContext } from './src/utils/authContext';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'rgb(255, 255, 255)'}
};


const App = () => {
  const [user, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {

  // }, [])

  return (
    <AuthContext.Provider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{headerShown: false}} component={MainStackScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;
