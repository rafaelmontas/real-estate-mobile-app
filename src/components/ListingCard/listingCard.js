import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import NumberFormat from 'react-number-format';
import styles from './styles';


const ListingCard = (props) => {

  // console.log(props)

  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: props.listing.imgSrc }}/>
      </View>
      {/* Listing Info View */}
      <View style={styles.cardInfo}>
        <View style={styles.priceLike}>
          <NumberFormat value={props.listing.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value) => (
                          <Text style={styles.price}>{value}</Text>
                        )} />
          <FontAwesomeIcon icon={faHeartReg} size={25} color={'grey'}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.bedsBaths}>
            {props.listing.beds} {props.listing.beds > 1 ? 'habs' : 'hab'}
          </Text>
          <Text style={styles.bedsBaths}>
            {props.listing.baths} {props.listing.baths > 1 ? 'baños' : 'baño'}
          </Text>
          <Text style={styles.parq}>{props.listing.cars} parq</Text>
          <View style={styles.mts}>
            <Text style={styles.mtsNum}>{props.listing.mts} m</Text>
            <Text style={styles.mtsSup}>2</Text>
          </View >
        </View>
        <View style={styles.location}>
          <FontAwesomeIcon style={styles.dot} icon={faCircle} size={6} color={'#000'}/>
          <Text style={styles.sector}>{props.listing.sector}</Text>
        </View>
      </View>
    </View>
  )
}

export default ListingCard;
