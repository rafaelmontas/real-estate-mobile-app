import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import ListingCard from '../../components/ListingCard/listingCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles';

import data from '../../../assets/data/data';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.SearchHeader}>
        <View style={styles.searchButton}>
          <TouchableOpacity style={styles.searchText} onPress={() => console.warn('Search button clicked')}>
            <FontAwesomeIcon icon={faSearch} size={18} color={'grey'}/>
            <Text style={styles.searchInnerText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => console.warn('Filters button clicked')}>
            <Text style={styles.filterText}>Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatContainer}>
        <FlatList data={data}
                  renderItem={({item}) => <ListingCard listing={item}
                  keyExtractor={(itemKey) => itemKey.id} />}
                  contentContainerStyle={styles.listContainer}/>
      </View>
    </SafeAreaView>
  )
}

export default Search;
