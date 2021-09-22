import React, { useEffect, useState, useRef, useContext } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image,
TouchableOpacity, Share, Linking } from 'react-native';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faImage } from '@fortawesome/free-regular-svg-icons';
import ReadMore from 'react-native-read-more-text';
import RBSheet from "react-native-raw-bottom-sheet";
import ContactForm from '../../components/ContactForm/ContactForm';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../utils/authContext';
import axios from 'axios';
import styles from './Styles';


const ListingDetails = (props) => {
  // const [listing, setListing] = useState({})
  // const [agent, setAgent] = useState({})
  // const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation();
  const refRBSheet = useRef()
  const { isLoggedIn, userProfile } = useContext(AuthContext)
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
    if (!props.isLoading) {
      const body = {
        listing_id: props.listing.id,
        agent_id: props.agent.id,
        ha_id: null,
        user_id: isLoggedIn ? userProfile.id : null,
        platform: props.platform,
        os: props.os,
        ip_address: props.ipAddress,
        udid: props.udid
      }
      // https://www.hauzzy.com/api/properties/${props.listing.id}/views
      axios.post(`https://www.hauzzy.com/api/properties/${props.listing.id}/views`, body)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading])

  // useEffect(() => {
  //   fetch(`http://192.168.1.5:5000/api/properties/${route.params.listingId}`)
  //     .then(response => response.json())
  //     .then(res => {
  //       setListing(res)
  //       console.log(res)
  //       return fetch(`http://192.168.1.5:5000/api/agents/${res.agent_id}`)
  //     })
  //     .then(response => response.json())
  //     .then(res => {
  //       setAgent(res)
  //       setIsLoading(false)
  //       console.log(res)
  //     })
  // }, [route.params.listingId])

  const renderAmenities = () => (
    Object.keys(props.listing['PropertyAmenity'])
    .filter(amenity => props.listing['PropertyAmenity'][amenity] === true).map(amenity => {
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

  const onShare = async () => {
    try {
      await Share.share({
        url: `https://www.hauzzy.com/properties/${props.listing.id}`
      })
    } catch (error) {
      alert(error.message);
    }
  }

  const renderAgentPicture = () => {
    if (props.agent['AgentProfilePicture'] === null) {
      return 'https://agents-profile-pictures.s3.us-east-2.amazonaws.com/profile-avatar.png'
    } else {
      return props.agent['AgentProfilePicture'].location
    }
  }

  if (!props.isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.imageContainer}
            activeOpacity={1}
            onPress={() => navigation.navigate('ImageSlider', {
              // screen: 'listingDetails',
              // images: listing['PropertyPictures']
            })}>
            <Image
              style={styles.listingImage}
              source={{ uri: props.listing['PropertyPictures'][0].location }}/>
            <View style={styles.imageCount}>
              <Text style={styles.countText}>{props.listing['PropertyPictures'].length}</Text>
              <FontAwesomeIcon icon={faImage} size={22} color={'#fff'}/>
            </View>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <View style={styles.topInfoCont}>
              <View style={styles.topHeader}>
                <NumberFormat
                  value={props.listing.listing_price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'US$'}
                  renderText={(value) => (
                    <Text style={styles.price}>{value}</Text>
                  )} />
                  <TouchableOpacity activeOpacity={1} onPress={() => onShare()}>
                    <FontAwesomeIcon icon={faEllipsisH} size={20} color={'grey'}/>
                  </TouchableOpacity>
              </View>
              <Text style={styles.sector}>{props.listing.sector}</Text>
              <View style={styles.stats}>
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
                <Text style={styles.descriptionText}>{props.listing.description}</Text>
              </ReadMore>
            </View>
            <View style={styles.agentContainer}>
              <View style={styles.agentWrapper}>
                <Image
                  style={styles.image}
                  source={{ uri: renderAgentPicture() }}/>
                <View style={styles.agentInfo}>
                  <Text style={styles.agentName}>{props.agent.name}</Text>
                  {props.agent.phone_number && <NumberFormat
                    value={props.agent.phone_number}
                    displayType={'text'}
                    format="(###) ###-####"
                    renderText={(value) => (
                      <Text>{value}</Text>
                    )} />}
                  <Text>{`Propiedades (${props.agent.n_listings})`}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={700}
          customStyles={{
            // wrapper: loginOpen ? styles.modalStylesWrapper : {},
            container: styles.modalStylesContainer,
            draggableIcon: styles.modalStylesDraggable
          }}>
          <ContactForm user={userProfile} agent={props.agent} listingId={props.listing.id} isLoggedIn={isLoggedIn}/>
        </RBSheet>
        <View style={styles.agentContact}>
          <TouchableOpacity
            style={styles.contactButton}
            activeOpacity={1}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.buttonsText}>Contactar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactButton}
            activeOpacity={1}
            onPress={() => Linking.openURL(`tel://${props.agent.phone_number}`)}>
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
