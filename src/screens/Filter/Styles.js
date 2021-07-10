import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  scrollView: {
    // backgroundColor: 'pink',
  },
  listingTypeContainer: {
    marginBottom: 12
  },
  listingType: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 35,
    borderRadius: 6
  },
  typeSale: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  },
  typeRent: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  },
  typeActive: {
    backgroundColor: '#1657D7'
  },
  typeText: {
    color: 'black',
    fontWeight: '600'
  },
  typeTextActive: {
    color: 'white'
  },
  text: {
    fontSize: 42
  },
})

export default styles;
