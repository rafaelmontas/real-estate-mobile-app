import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styles from './Styles';

const ImageSlider = (props) => {
  console.log(props.images)

  return (
    <SafeAreaView style={styles.sliderContainer}>
      {/* <View style={{width: '100%', height: '60%'}}> */}
        {/* <Text>image slider</Text> */}
        <StatusBar backgroundColor="#000" barStyle="light-content"/>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={({nativeEvent}) => props.handleScroll(nativeEvent)}
          contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
          style={styles.scrollViewCont}>
          {
            props.images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image.location}}
                style={styles.image}/>
            ))
          }
        </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default ImageSlider
