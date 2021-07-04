import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { sectorsProvinces } from '../../utils/sectorsProvinces';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './Styles';


const SearchAutoComplete = (props) => {
  const [suggestions, setSuggestions] = useState(sectorsProvinces.slice(0, 6));
  const navigation = useNavigation();

  useFocusEffect(React.useCallback(() => {
    // Do something when the screen is focused
    console.log('search mounted')
    return () => {
      // Do something when the screen is unfocused
      // Useful for cleanup functions
      console.log('search unmounted')
    }
  }, []))


  const onTextChange = (text) => {
    // console.log(text)
    if (text.length === 0) {
      setSuggestions(sectorsProvinces.slice(0, 6))
      props.setInputText(text)
    } else {
      const regex = new RegExp(`${text}`, 'i');
      const newSuggestions = sectorsProvinces.sort(v => v.sector).filter(v => regex.test(v.sector)).slice(0, 6);
      setSuggestions(newSuggestions)
      props.setInputText(text)
    }
  }

  const onSelect = (provinceSelected, sectorSelected) => {
    props.setInputText(sectorSelected)
    props.setProvince(provinceSelected)
    props.setSector(sectorSelected)
    // console.log(props.province, props.sector)
    props.onSearch(provinceSelected, sectorSelected, props.listingType, props.minPrice, props.maxPrice, props.bedrooms, props.bathrooms, props.propertyType)
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View style={styles.SearchHeader}>
        <View style={styles.SearchInputCont}>
          <FontAwesomeIcon icon={faSearch} size={18} color={'grey'}/>
          <TextInput style={styles.SearchInput}
                     placeholder="Buscar"
                     value={props.inputText}
                     autoFocus={true}
                     onChangeText={text => onTextChange(text)}/>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList data={suggestions}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.suggestion} onPress={() => onSelect(item.province, item.sector)}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color={'grey'}/>
                    <View style={styles.suggestInfo}>
                      <Text style={styles.infoSector}>{item.sector}</Text>
                      <Text style={styles.infoProvince}>{item.province}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(itemKey) => itemKey.sector}
                contentContainerStyle={styles.suggestContainer}/>
    </SafeAreaView>
  )
}

export default SearchAutoComplete;
