import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../utils/authContext';
import styles from './Styles';

const Auth = ({navigation}) => {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const { getUser } = useContext(AuthContext)

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
              {errorMsg === 'Email incorrecto' && renderErr()}
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
              {errorMsg === 'Contraseña incorrecta' && renderErr()}
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

  const renderErr = () => {
    return (
      <View style={styles.errorContainer}>
        <FontAwesomeIcon icon={faExclamationCircle} size={16} color={'red'} style={{marginRight: 5}}/>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>
    )
  }

  const handleModeChange = (mode) => {
    navigation.setOptions({ title: mode === 'login' ? 'Iniciar sesión' : 'Registrarse' })
    setMode(mode)
  }
  const handleLogin = () => {
    console.log('login clicked', email, password)
    const data = { email: email, password: password };

    axios.post('http://192.168.1.17:5000/user-auth', data)
    .then(res => {
      console.log(res)
      AsyncStorage.setItem('user-jwt', res.data.token)
      getUser()
    })
    .catch(err => {
      console.log('erro: ', err.response.data)
      setErrorMsg(err.response.data.msg)
    })
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
