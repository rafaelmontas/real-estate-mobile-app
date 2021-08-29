import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import styles from './styles';

const ContactForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [textError, setTextError] = useState('')
  const [leadOk, setLeadOk] = useState(false)
  const [leadText, setLeadText] = useState('')
  const isInitialMountName = useRef(true);
  const isInitialMountEmail = useRef(true);
  const isInitialMountText = useRef(true);

  useEffect(() => {
    console.log(props.user, props.agent, props.isLoggedIn)
    if (props.isLoggedIn) {
      setName(props.user.name)
      setEmail(props.user.email)
    } else {
      setName('')
      setEmail('')
    }
  }, [props.isLoggedIn])

  useEffect(() => {
    if (isInitialMountName.current) {
      isInitialMountName.current = false
    } else {
      if (name.length === 0) {
        setNameError('Nombre requerido')
      } else if (name.length !== 0 && nameError !== '') {
        setNameError('')
      }
    }
  }, [name])
  
  useEffect(() => {
    if (isInitialMountEmail.current) {
      isInitialMountEmail.current = false
    } else {
      if (email.length === 0) {
        setEmailError('Email requerido')
      } else if (email.length !== 0 && emailError !== '') {
        setEmailError('')
      }
    }
  }, [email])
  
  useEffect(() => {
    if (isInitialMountText.current) {
      isInitialMountText.current = false
    } else {
      console.log(text)
      if (text.length === 0) {
        console.log('mensaje')
        setTextError('Mensaje requerido')
      } else if (text.length !== 0 && textError !== '') {
        setTextError('')
      }
    }
  }, [text])

  const renderError = (error) => {
    if (error) {
      return <Text style={{marginTop: 5, color: 'red'}}>{error}</Text> 
    }
  }

  const handleLead = () => {
    if (!name && !email && !text) {
      setNameError('Nombre requerido')
      setEmailError('Email requerido')
      setTextError('Mensaje requerido')
    } else if (!name) {
      setNameError('Nombre requerido')
    } else if (!email) {
      setEmailError('Email requerido')
    } else if (!text) {
      setTextError('Mensaje requerido')
    } else {
      const body = {
        user_id: props.isLoggedIn ? props.user.id : 'd3d5b73a-5bdb-489b-a15b-255fb6115461',
        agent_id: props.agent.id,
        listing_id: props.listingId,
        initial_request: text
      }
      console.log('lead', body)
      axios.post(`https://www.hauzzy.com/agents/${props.agent.id}/leads`, body)
      .then(res => {
        console.log(res)
        setLeadOk(true)
        setLeadText(res.data.msg)
        // this.setState({leadStatus: res.status, msg: res.data.msg, alertOpen: true})
      })
      .catch(err => {
        console.log(err.response)
        // this.setState({leadStatus: err.response.status, msg: err.response.data.msg, alertOpen: true})
      })
    }
  }

  const renderView = () => {
    if (leadOk) {
      return (
        <View style={styles.leadView}>
          <FontAwesomeIcon icon={faCheckCircle} size={100} color={'#1657D7'}/>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 25}}>{leadText}</Text>
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.modalContainer} keyboardShouldPersistTaps={'handled'}>
          <Text style={styles.modalHeader}>Solicitar información</Text>
            <View>
              <View style={styles.inputContainers}>
                <TextInput
                  style={styles.modalInputs}
                  value={name}
                  placeholder="Nombre"
                  onChangeText={text => setName(text)}/>
                {renderError(nameError)}
              </View>
              <View style={styles.inputContainers}>
                <TextInput
                  style={styles.modalInputs}
                  autoCapitalize={'none'}
                  value={email}
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}/>
                {renderError(emailError)}
              </View>
              <View style={styles.inputContainers}>
                <TextInput
                  style={styles.modalInputs}
                  value={phone}
                  placeholder="Teléfono"
                  keyboardType="phone-pad"
                  textContentType={'telephoneNumber'}
                  onChangeText={text => setPhone(text)}/>
              </View>
              <View style={styles.inputContainers}>
                <TextInput
                  style={[styles.modalInputs, styles.multiLineInput]}
                  multiline
                  textAlignVertical={'top'}
                  numberOfLines={4}
                  value={text}
                  placeholder="Escribir mensaje"
                  onChangeText={text => setText(text)}/>
                {renderError(textError)}
              </View>
              <View style={styles.submitContainer}>
                <TouchableOpacity
                  style={styles.submitButton}
                  activeOpacity={1}
                  onPress={() => handleLead()}>
                  <Text style={styles.buttonText}>Solicitar información</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      )
    }
  }

  return renderView()
}

export default ContactForm;
