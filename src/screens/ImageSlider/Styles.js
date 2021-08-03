import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window')
const height = width * 100 / 60

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewCont: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height * 0.60,
    height: 300
  },
  image: {
    height: 300,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height * 0.25,
    resizeMode: 'contain'
  }
})

export default styles;
