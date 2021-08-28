import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
import ListingCard from '../../components/ListingCard/listingCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';


const Search = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.SearchHeader}>
        <View style={styles.searchButton}>
          <TouchableOpacity style={styles.searchText} activeOpacity={1} onPress={() => navigation.navigate('SearchAutoComplete')}>
            <FontAwesomeIcon icon={faSearch} size={18} color={'grey'}/>
            <Text style={styles.searchInnerText}>{props.inputText  === '' ? 'Buscar' : props.inputText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} activeOpacity={1} onPress={() => navigation.navigate('Filters')}>
            <Text style={styles.filterText}>Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatContainer}>
        <FlatList data={props.listings}
                  renderItem={({item}) => <ListingCard listing={item}
                  userLike={props.likes.findIndex(x => x.listing_id === item.id)}
                  userLikeId={props.likes.find(x => x.listing_id === item.id)}
                  handleLike={props.handleLike}
                  handleLikeDelete={props.handleLikeDelete}/>}
                  keyExtractor={(itemKey) => itemKey.id}
                  contentContainerStyle={styles.listContainer}/>
      </View>
    </SafeAreaView>
  )
}

export default Search;
