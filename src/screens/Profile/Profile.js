import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import styles from './Styles';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <FontAwesomeIcon icon={faBell} size={55} color={'#1657D7'}/> */}
        <Text style={styles.text}>Perfil de usuario</Text>
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
}

export default Profile;
