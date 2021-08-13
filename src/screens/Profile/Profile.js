import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../utils/authContext';
import styles from './Styles';

const Profile = ({navigation}) => {
  const { logOut, isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)

  if (!isLoggedIn) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Perfil de usuario</Text>
          <Text style={styles.secondText}>Inicia sesión para ver tu perfil.</Text>
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
        <TouchableOpacity
              // style={styles.logInButton}
              activeOpacity={1}
              onPress={() => logOut()}>
              <Text style={styles.loginText}>Cerrar sesión</Text>
            </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default Profile;
