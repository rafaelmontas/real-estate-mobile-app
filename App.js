import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStackScreen from './src/navigation/MainStack';
import { AuthContext } from './src/utils/authContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'rgb(255, 255, 255)'}
};


const App = () => {
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [userLoading, setUserLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUser = async () => {
    const userJwt = await AsyncStorage.getItem('user-jwt')
    axios({method: 'get', url: 'https://www.hauzzy.com/user-auth/user/', headers: {'user-auth': userJwt}})
      .then(user => {
        console.log(user.data)
        setUser(user.data)
        return axios.get(`https://www.hauzzy.com/users/${user.data.id}`, {
          headers: { 'user-auth': userJwt }
        })
      })
      .then(res => {
        console.log(res.data)
        setUserProfile(res.data)
        setIsLoggedIn(true)
        setUserLoading(false)
      })
      .catch(err => {
        console.log(err.response.data, err.response.status)
        AsyncStorage.removeItem('user-jwt')
        setUser(null)
        setUserProfile(null)
        setIsLoggedIn(false)
        setUserLoading(false)
      })
  }

  const getUserProfile = async (userJwt) => {
    // const userJwt = await AsyncStorage.getItem('user-jwt')
    console.log('user profiel called')
    axios.get(`https://www.hauzzy.com/users/${user.id}`, {headers: { 'user-auth': userJwt }})
      .then(res => {
        console.log(res.data)
        setUserProfile(res.data)
      })
      .catch(err => {
        console.log(err.response.data, err.response.status)
        AsyncStorage.removeItem('user-jwt')
        setUser(null)
        setUserProfile(null)
        setIsLoggedIn(false)
      })
  }

  const logOut = async () => {
    await AsyncStorage.removeItem('user-jwt')
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        userProfile: userProfile,
        userLoading: userLoading,
        isLoggedIn: isLoggedIn,
        getUser: getUser,
        getUserProfile: getUserProfile,
        logOut: logOut
      }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{headerShown: false}} component={MainStackScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;
