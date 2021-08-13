import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../utils/authContext';
import styles from './Styles';


const Likes = ({navigation}) => {
  const { isLoggedIn } = useContext(AuthContext)

  if (!isLoggedIn) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Favoritos</Text>
          <Text style={styles.secondText}>Inicia sesión para guardar propiedades.</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.logInButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('AuthScreen', {
                screen: 'AuthScreen',
                title: 'Iniciar sesión'
              })}>
              <Text style={styles.loginText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('AuthScreen', {
                screen: 'AuthScreen',
                title: 'Registrarse'
              })}>
              <Text style={styles.signUpText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView>
        <View>
          <Text>Favoritos</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Likes;
