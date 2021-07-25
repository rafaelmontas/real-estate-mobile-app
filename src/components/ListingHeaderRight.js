import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg, faShareSquare } from '@fortawesome/free-regular-svg-icons';


const ListingHeaderRight = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FontAwesomeIcon icon={faHeartReg} size={22} color={'grey'} style={{marginRight: 20}}/>
      <FontAwesomeIcon icon={faShareSquare} size={22} color={'grey'}/>
    </View>
  )
}

export default ListingHeaderRight;
