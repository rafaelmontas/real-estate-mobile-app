import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  SearchHeader: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3'
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 13
  },
  searchText: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    borderRightColor: 'grey',
    borderRightWidth: 1
  },
  searchInnerText: {
    marginLeft: 8,
    color: 'grey'
  },
  filterButton: {
    marginLeft: 13
  },
  filterText: {
    color: '#1657D7',
    fontWeight: '600'
  },
  flatContainer: {
    marginBottom: 150
  },
  listContainer: {
    padding: 15
  }
})

export default styles;
