import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { sectorsProvinces } from '../../utils/sectorsProvinces';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './Styles';

const Filter = (props) => {
  return (
    <SafeAreaView>
      <Text>Filters</Text>
    </SafeAreaView>
  )
}

export default Filter;
