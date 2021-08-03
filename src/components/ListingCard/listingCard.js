import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import NumberFormat from 'react-number-format';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const ListingCard = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}
                      onPress={() => navigation.navigate('ListingStack', {
                        // screen: 'ListingDetails',
                        listingId: props.listing.id
                        // params: {
                        //   listingId: props.listing.id
                        // }
                      })}
                      activeOpacity={1}>
      {/* Image */}
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: props.listing['PropertyPictures'][0].location }}/>
      </View>
      {/* Listing Info View */}
      <View style={styles.cardInfo}>
        <View style={styles.priceLike}>
          <NumberFormat value={props.listing.listing_price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'US$'}
                        renderText={(value) => (
                          <Text style={styles.price}>{value}</Text>
                        )} />
          <FontAwesomeIcon icon={faHeartReg} size={25} color={'grey'}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.bedsBaths}>
            {props.listing.bedrooms} {props.listing.bedrooms > 1 ? 'habs' : 'hab'}
          </Text>
          <Text style={styles.bedsBaths}>
            {props.listing.bathrooms} {props.listing.bathrooms > 1 ? 'baños' : 'baño'}
          </Text>
          <Text style={styles.parq}>{props.listing.parking_spaces} parq</Text>
          <View style={styles.mts}>
            <Text style={styles.mtsNum}>{props.listing.square_meters} m</Text>
            <Text style={styles.mtsSup}>2</Text>
          </View >
        </View>
        <View style={styles.location}>
          <FontAwesomeIcon style={styles.dot} icon={faCircle} size={6} color={'#000'}/>
          <Text style={styles.sector}>{props.listing.sector}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListingCard;
