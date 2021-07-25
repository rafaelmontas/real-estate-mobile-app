import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles';


const ListingDetails = ({route, navigation}) => {
  const [listing, setListing] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://192.168.0.4:5000/api/properties/${route.params.listingId}`)
      .then(response => response.json())
      .then(res => {
        setListing(res)
        setIsLoading(false)
        console.log(res)
      });
  }, [route.params.listingId])


  if (!isLoading) {
    return (
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Text>Image</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.topInfoCont}>
            <View style={styles.topHeader}>
              <NumberFormat
                value={listing.listing_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => (
                  <Text style={styles.price}>{value}</Text>
                )} />
              <FontAwesomeIcon icon={faEllipsisH} size={20} color={'grey'}/>
            </View>
            <Text style={styles.sector}>{listing.sector}</Text>
            <View style={styles.stats}>
              <Text style={styles.bedsBaths}>
                {listing.bedrooms} {listing.bedrooms > 1 ? 'habs' : 'hab'}
              </Text>
              <Text style={styles.bedsBaths}>
                {listing.bathrooms} {listing.bathrooms > 1 ? 'baños' : 'baño'}
              </Text>
              <Text style={styles.parq}>{listing.parking_spaces} parq</Text>
              <View style={styles.mts}>
                <Text style={styles.mtsNum}>{listing.square_meters} m</Text>
                <Text style={styles.mtsSup}>2</Text>
              </View >
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  } else {
    return <View></View>
  }
}

export default ListingDetails;
