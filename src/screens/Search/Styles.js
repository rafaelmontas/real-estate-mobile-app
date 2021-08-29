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
  noResults: {
    // flex: 1,
    // backgroundColor: 'red',
    height: '100%',
    // padding: 15,
    paddingHorizontal: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainNoResults: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15
  },
  subNoResults: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    // fontWeight: '500',
    marginBottom: 15
  },
  OpenFilters: {
    // marginTop: 10,
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#1657D7',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1657D7'
  },
  filtersText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  listContainer: {
    padding: 15
  }
})

export default styles;
