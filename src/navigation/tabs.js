import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faHeart, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg,
  faUserCircle as faUserCircleReg,
  faBell as faBellReg } from '@fortawesome/free-regular-svg-icons';
import { Search, Likes, Alerts, Profile } from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1657D7',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Buscar" options={{
        tabBarIcon: ({ focused, color }) => (
          <FontAwesomeIcon icon={faSearch} size={25} color={color}/>
        )
      }}>
        {() => <Search
                  listings={props.listings}
                  isLoading={props.isLoading}
                  likes={props.likes}
                  handleLike={props.handleLike}
                  handleLikeDelete={props.handleLikeDelete}
                  inputText={props.inputText}/>}
      </Tab.Screen>
      <Tab.Screen name="Favoritos" options={{
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <FontAwesomeIcon icon={faHeart} size={25} color={color}/>
          } else {
            return <FontAwesomeIcon icon={faHeartReg} size={25} color={color}/>
          }
        }
      }}>
        {() => <Likes
                  likes={props.likes}
                  handleLike={props.handleLike}
                  handleLikeDelete={props.handleLikeDelete}/>}
      </Tab.Screen>
      <Tab.Screen name="Alertas" component={Alerts} options={{
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <FontAwesomeIcon icon={faBell} size={25} color={color}/>
          } else {
            return <FontAwesomeIcon icon={faBellReg} size={25} color={color}/>
          }
        }
      }}/>
      <Tab.Screen name="Perfil" component={Profile} options={{
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
