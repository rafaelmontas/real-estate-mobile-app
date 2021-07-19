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
    marginBottom: 30
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
    marginBottom: 30
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 20
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
  // Price Range
  priceRangeContainer: {
    marginBottom: 30
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray'
  },
  priceLabels: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18
  },
  trackStyle: {
    height: 6,
    color: '#1657D7'
  },
  // Bedrooms
  bedroomsContainer: {
    marginBottom: 30
  },
  bedWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 45
  },
  labelButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  labelButtonFirst: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  },
  labelButtonLast: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  },
  labelText: {
    textAlign: 'center',
    fontWeight: '600'
  },
  labelButtonSelected: {
    backgroundColor: '#1657D7'
  },
  labelTextSelected: {
    color: 'white'
  },
  // Bathrooms
  bathroomsContainer: {
    marginBottom: 30
  },
  bathWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 45
  },
  // Search Button
  searchContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 70,
    backgroundColor: '#f9fafa',
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  searchButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 12,
    backgroundColor: '#1657D7',
    borderRadius: 6
  },
  searchText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
})

export default styles;
