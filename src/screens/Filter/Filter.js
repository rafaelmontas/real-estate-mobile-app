import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { sectorsProvinces } from '../../utils/sectorsProvinces';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './Styles';

const Filter = (props) => {

  useEffect(() => {
    console.log(props.listingType)
  }, [props.listingType])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Listing Type */}
        <View style={styles.listingTypeContainer}>
          <View style={styles.listingType}>
            <TouchableOpacity style={props.listingType === 'sale' ? [styles.typeSale, styles.typeActive] : styles.typeSale}
                              activeOpacity={1}
                              onPress={() => props.setListingType('sale')}>
              <Text style={props.listingType === 'sale' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={props.listingType === 'rent' ? [styles.typeRent, styles.typeActive] : styles.typeRent}
                              activeOpacity={1}
                              onPress={() => props.setListingType('rent')}>
              <Text style={props.listingType === 'rent' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Alquilar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <View style={{height: 60}}>
        <Button title="Buscar"/>
      </View>
    </SafeAreaView>
  )
}

export default Filter;
