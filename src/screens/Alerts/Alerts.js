import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import styles from './Styles';

const Alerts = () => {
  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.container}>
        <FontAwesomeIcon icon={faBell} size={55} color={'#1657D7'}/>
        <Text style={styles.text}>Las notificaciones te dejarán saber de novedades importantes.</Text>
      </View>
    </SafeAreaView>
  )
}

export default Alerts;
