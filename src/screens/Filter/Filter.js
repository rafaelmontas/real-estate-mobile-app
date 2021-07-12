import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUmbrellaBeach, faHome, faCity } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './Styles';

const Filter = (props) => {
  const [listingType, setListingType] = useState('sale');
  const [propertyType, setPropertyType] = useState(['apartment', 'house', 'villa', 'penthouse']);
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(2000000);
  // const [bedrooms, setBedrooms] = useState(0);
  // const [bathrooms, setBathrooms] = useState(0);

  useEffect(() => {
    console.log(props.listingType, props.propertyType)
  }, [props.listingType, props.propertyType])

  const handlePropertyType = (type) => {
    let propTypes = propertyType
    if (propTypes.includes(type)) {
      const newPropTypes = propTypes.filter(item => item !== type)
      setPropertyType(newPropTypes)
      console.log(type, 'removed', `result: ${newPropTypes}`)
    } else {
      const newPropTypes = propTypes.concat(type)
      // newPropTypes.push(type)
      setPropertyType(newPropTypes)
      console.log(type, 'not included', 'included', newPropTypes)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Listing Type */}
        <View style={styles.listingTypeContainer}>
          <View style={styles.listingType}>
            <TouchableOpacity style={listingType === 'sale' ? [styles.typeSale, styles.typeActive] : styles.typeSale}
                              activeOpacity={1}
                              onPress={() => setListingType('sale')}>
              <Text style={listingType === 'sale' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listingType === 'rent' ? [styles.typeRent, styles.typeActive] : styles.typeRent}
                              activeOpacity={1}
                              onPress={() => setListingType('rent')}>
              <Text style={listingType === 'rent' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Alquilar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Property Type */}
        <View style={styles.propertyTypeContainer}>
          <Text style={styles.header}>Tipo de propiedad</Text>
          <View style={styles.selectContainer}>
            <View style={styles.selectTop}>
              <TouchableOpacity
                style={[styles.selectTopInner, propertyType.includes('apartment') ? styles.selectTopInnerLeftActive : styles.selectTopInnerLeft]}
                activeOpacity={1}
                onPress={() => handlePropertyType('apartment')}>
                <FontAwesomeIcon icon={faCity} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Apartamento</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.selectTopInner, propertyType.includes('house') ? styles.selectTopInnerRightActive : styles.selectTopInnerRight]}
                activeOpacity={1}
                onPress={() => handlePropertyType('house')}>
                <FontAwesomeIcon icon={faHome} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Casa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectDown}>
              <TouchableOpacity
                style={[styles.selectDownInner, propertyType.includes('villa') ? styles.selectDownInnerLeftActive : styles.selectDownInnerLeft]}
                activeOpacity={1}
                onPress={() => handlePropertyType('villa')}>
                <FontAwesomeIcon icon={faUmbrellaBeach} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Villa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.selectDownInner, propertyType.includes('penthouse') ? styles.selectDownInnerRightActive : styles.selectDownInnerRight]}
                activeOpacity={1}
                onPress={() => handlePropertyType('penthouse')}>
                <FontAwesomeIcon icon={faBuilding} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Penthouse</Text>
              </TouchableOpacity>
            </View>
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
