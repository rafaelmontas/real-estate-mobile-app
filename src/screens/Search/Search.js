import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import ListingCard from '../../components/ListingCard/listingCard';
import styles from './Styles';

import data from '../../../assets/data/data';

const Search = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList data={data}
                  renderItem={({item}) => <ListingCard listing={item}
                  keyExtractor={(itemKey) => itemKey.id} />}
                  contentContainerStyle={styles.listContainer}/>
      </View>
    </SafeAreaView>
  )
}

export default Search;
