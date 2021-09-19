import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../utils/authContext';
import { useNavigation } from '@react-navigation/native';
import ListingCard from '../../components/ListingCard/listingCard';
import styles from './Styles';


const Likes = (props) => {
  const navigation = useNavigation();
  const { isLoggedIn, userProfile } = useContext(AuthContext)

  console.log(props.likes, props.likes.length)

  const renderLikes = () => {
    if (userProfile.properties.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Favoritos</Text>
          <Text style={styles.secondText}>Guarda propiedades y todas tus favoritas estarán aquí.</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.signUpButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('Buscar')}>
              <Text style={styles.signUpText}>Buscar Propiedades</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.flatCont}>
          {/* <Text style={styles.header}>Favoritos</Text> */}
          <FlatList data={userProfile.properties}
                    ListHeaderComponent={LikesHeader}
                    renderItem={({item}) => <ListingCard listing={item}
                    userLike={props.likes.findIndex(x => x.listing_id === item.id)}
                    userLikeId={props.likes.find(x => x.listing_id === item.id)}
                    handleLike={props.handleLike}
                    handleLikeDelete={props.handleLikeDelete}/>}
                    keyExtractor={(itemKey) => itemKey.id}
                    contentContainerStyle={styles.container}/>
        </View>
      )
    }
  }

  if (!isLoggedIn) {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <View style={styles.container}>
          <Text style={styles.text}>Favoritos</Text>
          <Text style={styles.secondText}>Inicia sesión para guardar propiedades.</Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.logInButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('AuthScreen', {
                screen: 'AuthScreen',
                title: 'Iniciar sesión'
              })}>
              <Text style={styles.loginText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('AuthScreen', {
                screen: 'AuthScreen',
                title: 'Registrarse'
              })}>
              <Text style={styles.signUpText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        {renderLikes()}
      </SafeAreaView>
    )
  }
}

const LikesHeader = () => {
  return <Text style={styles.header}>Favoritos</Text>
}

export default Likes;
