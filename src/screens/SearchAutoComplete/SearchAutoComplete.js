import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { sectorsProvinces } from '../../utils/sectorsProvinces';
import styles from './Styles';


const SearchAutoComplete = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState(sectorsProvinces.slice(0, 6));
  const [province, setProvince] = useState('');
  const [sector, setSector] = useState('');


  const onTextChange = (text) => {
    console.log(text)
    if (text.length === 0) {
      setSuggestions(sectorsProvinces.slice(0, 6))
      setInputText(text)
    } else {
      const regex = new RegExp(`${text}`, 'i');
      const newSuggestions = sectorsProvinces.sort(v => v.sector).filter(v => regex.test(v.sector)).slice(0, 6);
      setSuggestions(newSuggestions)
      setInputText(text)
    }
  }

  const onSelect = (provinceSelected, sectorSelected) => {
    setProvince(provinceSelected)
    setSector(sectorSelected)
    setInputText(sectorSelected)
    console.log(province, sector)
  }

  return (
    <SafeAreaView>
      <View style={styles.SearchHeader}>
        <View style={styles.SearchInputCont}>
          <FontAwesomeIcon icon={faSearch} size={18} color={'grey'}/>
          <TextInput style={styles.SearchInput}
                     placeholder="Buscar"
                     value={inputText}
                     onChangeText={text => onTextChange(text)}/>
          <TouchableOpacity style={styles.cancelButton} onPress={() => console.warn('Cancel button clicked')}>
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
