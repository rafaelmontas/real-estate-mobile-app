import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ReadMore from 'react-native-read-more-text';
import styles from './Styles';


const ListingDetails = ({route, navigation}) => {
  const [listing, setListing] = useState({})
  const [agent, setAgent] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const amenities = {
    half_bathrooms: '1/2 Baño',
    air_conditioner: 'Aire Acondicionado',
    game_zone: 'Área de Juegos',
    laundry_room: 'Área de Lavado',
    social_area: 'Área Social',
    elevator: 'Ascensor',
    balcony: 'Balcón',
    family_room: 'Family Room',
    shared_gas: 'Gas Común',
    gym: 'Gimnasio',
    service_room: 'Habitación de Servicio',
    jacuzzy: 'Jacuzzi',
    lobby: 'Lobby',
    swimming_pool: 'Piscina',
    marble_floor: 'Piso de Marmol',
    power_plant: 'Planta Eléctrica',
    security: 'Seguridad 24/7',
    walk_in_closet: 'Walk In Closet',
    furnished: 'Amueblado',
    security_system: 'Cámaras de Seguridad',
    hardwood_floor: 'Piso de Madera'
  }

  useEffect(() => {
    fetch(`http://192.168.0.4:5000/api/properties/${route.params.listingId}`)
      .then(response => response.json())
      .then(res => {
        setListing(res)
        console.log(res)
        return fetch(`http://192.168.0.4:5000/api/agents/${res.agent_id}`)
      })
      .then(response => response.json())
      .then(res => {
        setAgent(res)
        setIsLoading(false)
        console.log(res)
      })
  }, [route.params.listingId])

  const renderAmenities = () => (
    Object.keys(listing['PropertyAmenity'])
    .filter(amenity => listing['PropertyAmenity'][amenity] === true).map(amenity => {
      return (
        <View style={styles.amenity} key={amenity}>
          <FontAwesomeIcon icon={faCheckCircle} size={16} color={'#1657D7'}/>
          <Text style={styles.amenityText}>{amenities[amenity]}</Text>
        </View>
      )
    })
  )

  const renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.showHideText} onPress={handlePress}>
        Leer más
      </Text>
    );
  }

  const renderRevealedFooter = (handlePress) => {
    return (
      <Text style={styles.showHideText} onPress={handlePress}>
        Leer menos
      </Text>
    );
  }

  if (!isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.listingImage}
              source={{ uri: listing['PropertyPictures'][0].location }}/>
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
            <View style={styles.amenitiesContainer}>
              <Text style={styles.header}>Amenidades</Text>
              <View style={styles.amenitiesWrapper}>
                {renderAmenities()}
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.header}>Descripción</Text>
              <ReadMore
                numberOfLines={6}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}>
                <Text style={styles.descriptionText}>{listing.description}</Text>
              </ReadMore>
            </View>
            <View style={styles.agentContainer}>
              <View style={styles.agentWrapper}>
                <Image
                  style={styles.image}
                  source={{ uri: agent['AgentProfilePicture'].location }}/>
                <View style={styles.agentInfo}>
                  <Text style={styles.agentName}>{agent.name}</Text>
                  {agent.phone_number && <NumberFormat
                    value={agent.phone_number}
                    displayType={'text'}
                    format="(###) ###-####"
                    renderText={(value) => (
                      <Text>{value}</Text>
                    )} />}
                  <Text>{`Propiedades (${agent.n_listings})`}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.agentContact}>
          <TouchableOpacity
            style={styles.contactButton}
            activeOpacity={1}
            onPress={() => console.log('contact agent')}>
            <Text style={styles.buttonsText}>Contactar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactButton}
            activeOpacity={1}
            onPress={() => console.log('contact agent')}>
            <Text style={styles.buttonsText}>Llamar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  } else {
    return <View/>
  }
}

export default ListingDetails;
