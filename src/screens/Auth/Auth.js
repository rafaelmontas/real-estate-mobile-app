import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import styles from './Styles';

const Auth = ({navigation}) => {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const renderForm = () => {
    if(mode === 'login') {
      return (
        <View>
          <Text style={styles.header}>Iniciar sesión</Text>
          <View style={styles.subDivision}>
            <Text style={styles.subHeader}>Necesitas una cuenta?</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => handleModeChange('signup')}>
              <Text style={styles.signupText}>Registrate</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.formInputs}
                value={email}
                keyboardType="email-address"
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}/>
            </View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.formInputs}
                value={password}
                keyboardType="default"
                secureTextEntry={true}
                placeholder="Contraseña"
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}/>
            </View>
            <View style={styles.formGroup}>
              <TouchableOpacity
                style={styles.submitButton}
                activeOpacity={1}
                onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formGroup}>
              <TouchableOpacity
                style={styles.forgotText}
                activeOpacity={1}
                onPress={() => handleLogin()}>
                <Text style={styles.forgotTextT}>Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.header}>Registrarse</Text>
          <View style={styles.subDivision}>
            <Text style={styles.subHeader}>Tienes una cuenta?</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => handleModeChange('login')}>
              <Text style={styles.signupText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  const handleModeChange = (mode) => {
    navigation.setOptions({ title: mode === 'login' ? 'Iniciar sesión' : 'Registrarse' })
    setMode(mode)
  }
  const handleLogin = () => {
    console.log('login clicked', email, password)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {renderForm()}
      </View>
    </SafeAreaView>
  )
}

export default Auth;
