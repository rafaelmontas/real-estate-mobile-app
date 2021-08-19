import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg, faShareSquare } from '@fortawesome/free-regular-svg-icons';


const ListingHeaderRight = (props) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    console.log(props.userLike, props.userLikeId)
    // props.userLike !== -1 ? setLiked(true) : setLiked(false)
    if (props.userLike !== -1) {
      setLiked(true)
      console.log("Set to liked TRUE mounted", liked)
    } else {
      setLiked(false)
      console.log("Set to Not Liked FALSE mounted", liked)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userLike])

  const renderLikeButton = () => {
    if (liked) {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => props.handleLikeDelete(props.userLikeId.id)}>
          <FontAwesomeIcon icon={faHeart} size={24} color={'red'}/>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => props.handleLike(props.listingId)}>
          <FontAwesomeIcon icon={faHeartReg} size={24} color={'grey'}/>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {renderLikeButton()}
    </View>
  )
}

export default ListingHeaderRight;
