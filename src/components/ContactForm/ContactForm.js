import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import NumberFormat from 'react-number-format';
import styles from './styles';

const ContactForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')


  return (
    <ScrollView style={styles.modalContainer}>
      <Text style={styles.modalHeader}>Solicitar información</Text>
      <View>
        <View style={styles.inputContainers}>
          <TextInput
            style={styles.modalInputs}
            value={name}
            placeholder="Nombre"
            onChangeText={text => setName(text)}/>
        </View>
        <View style={styles.inputContainers}>
          <TextInput
            style={styles.modalInputs}
            value={email}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputContainers}>
          <NumberFormat value={phone}
                          displayType={'text'}
                          format="(###) ###-####"
                          renderText={(value) => (
                            <TextInput
                              style={styles.modalInputs}
                              value={value}
                              placeholder="Teléfono"
                              keyboardType="phone-pad"
                              onChangeText={text => setPhone(text)}/>
                          )} />
        </View>
        <View style={styles.inputContainers}>
          <TextInput
            style={[styles.modalInputs, styles.multiLineInput]}
            multiline
            numberOfLines={4}
            value={text}
            placeholder="Escribir mensaje"
            onChangeText={text => setText(text)}/>
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={1}
            onPress={() => console.log('submit')}>
            <Text style={styles.buttonText}>Solicitar información</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default ContactForm;
