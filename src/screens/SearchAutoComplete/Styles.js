import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  SearchHeader: {
    flexDirection: 'row',
    padding: 15,
    // backgroundColor: 'red',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3'
  },
  SearchInputCont: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    // backgroundColor: 'blue',
    padding: 8,
    paddingLeft: 13
    // paddingHorizontal: 13
  },
  SearchInput: {
    // backgroundColor: 'blue',
    // backgroundColor: 'red',
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    borderRightColor: 'grey',
    borderRightWidth: 1,
    paddingVertical: 5
  },
  cancelButton: {
    marginLeft: 13,
    // backgroundColor: 'green',
    padding: 5
  },
  cancelText: {
    fontSize: 14,
    color: '#1657D7',
    fontWeight: '600'
  },
  // Suggestions
  suggestContainer: {
    // padding: 15
    // height: '100%',
    // backgroundColor: 'red'
  },
  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 25,
    // paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    // backgroundColor: 'blue'
  },
  suggestInfo: {
    marginLeft: 12
  },
  infoSector: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400'
  },
  infoProvince: {
    color: 'grey',
    fontWeight: '400'
  }
})

export default styles;
