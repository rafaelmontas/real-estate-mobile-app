import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    backgroundColor: 'white'
  },
  imgContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  image: {
    flex: 1,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  cardInfo: {
    padding: 16,
  },
  priceLike: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  },
  info: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8
  },
  bedsBaths: {
    marginRight: 8,
    fontSize: 16
  },
  parq: {
    fontSize: 16,
    marginRight: 8
  },
  mts: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  mtsNum: {
    fontSize: 16,
  },
  mtsSup: {
    fontSize: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sector: {
    fontSize: 14,
    // fontWeight: '600',
    marginLeft: 5,
    // color: '#545454'
  }
})

export default styles;
