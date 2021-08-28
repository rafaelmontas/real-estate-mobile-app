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
    // backgroundColor: 'blue',
    padding: 8
  },
  searchText: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    borderRightColor: 'grey',
    borderRightWidth: 1,
    padding: 5
  },
  searchInnerText: {
    fontSize: 16,
    marginLeft: 8,
    color: 'grey'
  },
  filterButton: {
    marginLeft: 13,
    // backgroundColor: 'green',
    padding: 5
  },
  filterText: {
    fontSize: 14,
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
