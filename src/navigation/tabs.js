import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg,
  faUserCircle as faUserCircleReg } from '@fortawesome/free-regular-svg-icons';

import { Search, Likes } from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1657D7',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Buscar" component={Search} options={{
        tabBarIcon: ({ focused, color }) => (
          <FontAwesomeIcon icon={faSearch} size={25} color={color}/>
        )
      }}/>
      <Tab.Screen name="Buscar2" component={Search} options={{
        tabBarIcon: ({ focused, color }) => (
          <FontAwesomeIcon icon={faSearch} size={25} color={color}/>
        )
      }}/>
      <Tab.Screen name="Favoritos" component={Likes} options={{
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <FontAwesomeIcon icon={faHeart} size={25} color={color}/>
          } else {
            return <FontAwesomeIcon icon={faHeartReg} size={25} color={color}/>
          }
        }
      }}/>
      <Tab.Screen name="Perfil" component={Likes} options={{
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <FontAwesomeIcon icon={faUserCircle} size={25} color={color}/>
          } else {
            return <FontAwesomeIcon icon={faUserCircleReg} size={25} color={color}/>
          }
        }
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs;
