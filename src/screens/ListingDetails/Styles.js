import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    backgroundColor: 'gray'
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  // topInfoCont: {

  // },
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
  }
})

export default styles;
