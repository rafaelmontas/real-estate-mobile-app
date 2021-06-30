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
    padding: 13
  },
  SearchInput: {
    // backgroundColor: 'blue',
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    borderRightColor: 'grey',
    borderRightWidth: 1
  },
  cancelButton: {
    marginLeft: 13
  },
  cancelText: {
    fontSize: 14,
    color: '#1657D7',
    fontWeight: '600'
  },
  // Suggestions
  suggestContainer: {
    padding: 15
  },
  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  suggestInfo: {
    marginLeft: 12
  },
  infoSector: {
    fontSize: 15,
    color: 'black',
    fontWeight: '100'
  },
  infoProvince: {
    color: 'grey',
    fontWeight: '100'
  }
})

export default styles;
