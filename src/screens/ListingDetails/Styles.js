import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: 250,
    backgroundColor: 'lightgray',
    position: 'relative'
  },
  listingImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageCount: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 15,
    marginBottom: 15,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  countText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 8
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  topInfoCont: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  },
  sector: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121'
  },
  stats: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8
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
  // Amenities
  amenitiesContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10
  },
  amenitiesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  amenity: {
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  amenityText: {
    marginLeft: 5,
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap'
  },
  descriptionContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  descriptionText: {
    fontSize: 16
  },
  showHideText: {
    marginTop: 5,
    fontSize: 16,
    color: '#1657D7'
  },
  agentContainer: {
    paddingVertical: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: 'lightgray'
  },
  agentWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgContainer: {
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 100
  },
  agentInfo: {
    marginLeft: 8
  },
  agentName: {
    fontWeight: '500',
    marginBottom: 5
  },
  agentContact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    backgroundColor: '#f9fafa',
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  contactButton: {
    flexBasis: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 12,
    backgroundColor: '#1657D7',
    borderRadius: 6
  },
  buttonsText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  modalStylesWrapper: {
    display: 'none'
  },
  modalStylesContainer: {
    borderRadius: 12
  },
  modalStylesDraggable: {
    backgroundColor: 'grey'
  }
})

export default styles;
