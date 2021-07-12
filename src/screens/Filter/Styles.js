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
    marginBottom: 20
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
  // Property Type
  propertyTypeContainer: {
    marginBottom: 20
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5
  },
  selectContainer: {
    // backgroundColor: 'green',
    height: 135
  },
  selectText: {
    fontSize: 14,
    marginTop: 5
  },
  selectTop: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    height: '50%'
  },
  selectTopInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    // borderRadius: 6
    // padding: 15
  },
  selectTopInnerLeft: {
    borderTopLeftRadius: 6
  },
  selectTopInnerLeftActive: {
    borderColor: '#1657D7',
    borderTopLeftRadius: 6,
    backgroundColor: 'rgba(44, 123, 236, 0.1)'
  },
  selectTopInnerRight: {
    borderTopRightRadius: 6
  },
  selectTopInnerRightActive: {
    borderColor: '#1657D7',
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(44, 123, 236, 0.1)'
  },
  selectDown: {
    flexDirection: 'row',
    height: '50%'
  },
  selectDownInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    // borderRadius: 6
    // padding: 15
  },
  selectDownInnerLeft: {
    borderBottomLeftRadius: 6
  },
  selectDownInnerLeftActive: {
    borderColor: '#1657D7',
    borderBottomLeftRadius: 6,
    backgroundColor: 'rgba(44, 123, 236, 0.1)'
  },
  selectDownInnerRight: {
    borderBottomRightRadius: 6
  },
  selectDownInnerRightActive: {
    borderColor: '#1657D7',
    borderBottomRightRadius: 6,
    backgroundColor: 'rgba(44, 123, 236, 0.1)'
  },
})

export default styles;
