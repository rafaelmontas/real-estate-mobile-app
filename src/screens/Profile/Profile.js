import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Linking } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../utils/authContext';
import styles from './Styles';

const Profile = ({navigation}) => {
  const { logOut, isLoggedIn, userProfile } = useContext(AuthContext)
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
      <SafeAreaView style={{backgroundColor: '#f7f7f7'}}>
        <View style={[styles.container, styles.containerIn]}>
          <Text style={styles.text}>Perfil</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>Nombre:</Text>
            <Text style={styles.subText}>{userProfile.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>Email:</Text>
            <Text style={styles.subText}>{userProfile.email}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.logOutButton}
              activeOpacity={1}
              onPress={() => logOut()}>
              <Text style={styles.logOutText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{color: '#1657D7', fontSize: 16}} onPress={() => Linking.openURL('https://www.hauzzy.com/terms-and-conditions')}> Términos de Uso
              <Text style={{color: 'gray'}}> y
                <Text style={{color: '#1657D7'}} onPress={() => Linking.openURL('https://www.hauzzy.com/privacy-policy')}> Política de Privacidad</Text>
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default Profile;
