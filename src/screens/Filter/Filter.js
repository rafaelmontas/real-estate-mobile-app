import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUmbrellaBeach, faHome, faCity } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import styles from './Styles';

const Filter = (props) => {
  const navigation = useNavigation();
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [listingType, setListingType] = useState(props.listingType);
  const [propertyType, setPropertyType] = useState(props.propertyType);
  const [minMaxPriceSale, setMinMaxPriceSale] = useState([props.minPrice, props.maxPrice])
  const [minMaxPriceRent, setMinMaxPriceRent] = useState(props.listingType === 'rent' ? [props.minPrice, props.maxPrice] : [500, 5000])
  const [bedrooms, setBedrooms] = useState(props.bedrooms);
  const [bathrooms, setBathrooms] = useState(props.bathrooms);

  useEffect(() => {
    if (props.reset) {
      handleReset()
    }
  })

  const handleReset = () => {
    setListingType('sale')
    setPropertyType(['apartment', 'house', 'villa', 'penthouse'])
    setMinMaxPriceSale([50000, 500000])
    setBedrooms(0)
    setBathrooms(0)
    props.setReset(false)
  }

  const handleListingType = (type) => {
    setListingType(type)
    setMinMaxPriceSale([50000, 500000])
    setMinMaxPriceRent([500, 5000])
  }

  const handlePropertyType = (type) => {
    let propTypes = propertyType
    if (propTypes.includes(type)) {
      const newPropTypes = propTypes.filter(item => item !== type)
      setPropertyType(newPropTypes)
      console.log(type, 'removed', `result: ${newPropTypes}`)
    } else {
      const newPropTypes = propTypes.concat(type)
      // newPropTypes.push(type)
      setPropertyType(newPropTypes)
      console.log(type, 'not included', 'included', newPropTypes)
    }
  }

  const handlePriceRange = (values) => {
    if (listingType === 'sale') {
      setMinMaxPriceSale(values)
    } else {
      setMinMaxPriceRent(values)
    }
    console.log(values)
  }
  const renderPriceLabel = () => {
    if (listingType === 'sale') {
      if (minMaxPriceSale[0] === 50000 && minMaxPriceSale[1] === 500000) {
        return <Text>Cualquier precio</Text>
      } else if (minMaxPriceSale[0] !== 50000 && minMaxPriceSale[1] === 500000) {
        return <Text>{`Desde $${minMaxPriceSale[0] / 1000}K`}</Text>
      } else if (minMaxPriceSale[0] === 50000 && minMaxPriceSale[1] !== 500000) {
        return <Text>{`Hasta $${minMaxPriceSale[1] / 1000}K`}</Text>
      } else {
        return <Text>{`$${minMaxPriceSale[0] / 1000}K - $${minMaxPriceSale[1] / 1000}K`}</Text>
      }
    } else {
      if (minMaxPriceRent[0] === 500 && minMaxPriceRent[1] === 5000) {
        return <Text>Cualquier precio</Text>
      } else if (minMaxPriceRent[0] !== 500 && minMaxPriceRent[1] === 5000) {
        if (minMaxPriceRent[0] < 1000) {
          return <Text>{`Desde $${minMaxPriceRent[0]}`}</Text>
        } else {
          return <Text>{`Desde $${minMaxPriceRent[0] / 1000}K`}</Text>
        }
      } else if (minMaxPriceRent[0] === 500 && minMaxPriceRent[1] !== 5000) {
        if (minMaxPriceRent[1] < 1000) {
          return <Text>{`Hasta $${minMaxPriceRent[1]}`}</Text>
        } else {
          return <Text>{`Hasta $${minMaxPriceRent[1] / 1000}K`}</Text>
        }
      } else {
        if (minMaxPriceRent[0] < 1000 && minMaxPriceRent[1] < 1000) {
          return <Text>{`$${minMaxPriceRent[0]} - $${minMaxPriceRent[1]}`}</Text>
        } else if (minMaxPriceRent[0] >= 1000 && minMaxPriceRent[1] >= 1000) {
          return <Text>{`$${minMaxPriceRent[0] / 1000}K - $${minMaxPriceRent[1] / 1000}K`}</Text>
        } else if (minMaxPriceRent[0] < 1000 && minMaxPriceRent[1] >= 1000) {
          return <Text>{`$${minMaxPriceRent[0]} - $${minMaxPriceRent[1] / 1000}K`}</Text>
        }
      }
    }
  }

  const handleSearch = () => {
    let province;
    let sector;
    let prices;
    props.province === '' ? province = 'All' : province = props.province
    props.sector === '' ? sector = 'All' : sector = props.sector
    listingType === 'sale' ? prices = minMaxPriceSale : prices = minMaxPriceRent
    props.onSearch(province, sector, listingType, prices[0], prices[1], bedrooms, bathrooms, propertyType)
    props.setListingType(listingType)
    props.setPropertyType(propertyType)
    props.setMinPrice(prices[0])
    props.setMaxPrice(prices[1])
    props.setBedrooms(bedrooms)
    props.setBathrooms(bathrooms)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.contentContainer}
                  scrollEnabled={scrollEnabled}>
        {/* Listing Type */}
        <View style={styles.listingTypeContainer}>
          <View style={styles.listingType}>
            <TouchableOpacity style={listingType === 'sale' ? [styles.typeSale, styles.typeActive] : styles.typeSale}
                              activeOpacity={1}
                              onPress={() => handleListingType('sale')}>
              <Text style={listingType === 'sale' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={listingType === 'rent' ? [styles.typeRent, styles.typeActive] : styles.typeRent}
                              activeOpacity={1}
                              onPress={() => handleListingType('rent')}>
              <Text style={listingType === 'rent' ? [styles.typeText, styles.typeTextActive] : styles.typeText}>Alquilar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Property Type */}
        <View style={styles.propertyTypeContainer}>
          <Text style={styles.header}>Tipo de propiedad</Text>
          <View style={styles.selectContainer}>
            <View style={styles.selectTop}>
              <TouchableOpacity
                style={[styles.selectTopInner, propertyType.includes('apartment') ? styles.selectTopInnerLeftActive : styles.selectTopInnerLeft]}
                activeOpacity={1}
                onPress={() => handlePropertyType('apartment')}>
                <FontAwesomeIcon icon={faCity} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Apartamento</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.selectTopInner, propertyType.includes('house') ? styles.selectTopInnerRightActive : styles.selectTopInnerRight]}
                activeOpacity={1}
                onPress={() => handlePropertyType('house')}>
                <FontAwesomeIcon icon={faHome} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Casa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectDown}>
              <TouchableOpacity
                style={[styles.selectDownInner, propertyType.includes('villa') ? styles.selectDownInnerLeftActive : styles.selectDownInnerLeft]}
                activeOpacity={1}
                onPress={() => handlePropertyType('villa')}>
                <FontAwesomeIcon icon={faUmbrellaBeach} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Villa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.selectDownInner, propertyType.includes('penthouse') ? styles.selectDownInnerRightActive : styles.selectDownInnerRight]}
                activeOpacity={1}
                onPress={() => handlePropertyType('penthouse')}>
                <FontAwesomeIcon icon={faBuilding} size={20} color={'grey'}/>
                <Text style={styles.selectText}>Penthouse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Price Range Slider */}
        <View style={styles.priceRangeContainer}>
          <Text style={styles.header}>Rango de precio</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.priceLabels}>{renderPriceLabel()}</Text>
            <MultiSlider
              values={listingType === 'sale' ? minMaxPriceSale : minMaxPriceRent}
              allowOverlap={false}
              min={listingType === 'sale' ? 50000 : 500}
              max={listingType === 'sale' ? 500000 : 5000}
              step={listingType === 'sale' ? 10000 : 250}
              // minMarkerOverlapDistance={10000}
              onValuesChangeStart={() => setScrollEnabled(false)}
              onValuesChangeFinish={() => setScrollEnabled(true)}
              onValuesChange={(values) => handlePriceRange(values)}
              sliderLength={280}
              trackStyle={styles.trackStyle}
              />
          </View>
        </View>
        <View style={styles.bedroomsContainer}>
          <Text style={styles.header}>Habitaciones</Text>
          <View style={styles.bedWrapper}>
            <TouchableOpacity
              style={[styles.labelButton, styles.labelButtonFirst, bedrooms === 0 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(0)}>
              <Text style={[styles.labelText, bedrooms === 0 && styles.labelTextSelected]}>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bedrooms === 1 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(1)}>
              <Text style={[styles.labelText, bedrooms === 1 && styles.labelTextSelected]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bedrooms === 2 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(2)}>
              <Text style={[styles.labelText, bedrooms === 2 && styles.labelTextSelected]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bedrooms === 3 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(3)}>
              <Text style={[styles.labelText, bedrooms === 3 && styles.labelTextSelected]}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bedrooms === 4 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(4)}>
              <Text style={[styles.labelText, bedrooms === 4 && styles.labelTextSelected]}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, styles.labelButtonLast, bedrooms === 5 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBedrooms(5)}>
              <Text style={[styles.labelText, bedrooms === 5 && styles.labelTextSelected]}>5</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bathrooms */}
        <View style={styles.bathroomsContainer}>
          <Text style={styles.header}>Baños</Text>
          <View style={styles.bathWrapper}>
            <TouchableOpacity
              style={[styles.labelButton, styles.labelButtonFirst, bathrooms === 0 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(0)}>
              <Text style={[styles.labelText, bathrooms === 0 && styles.labelTextSelected]}>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bathrooms === 1 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(1)}>
              <Text style={[styles.labelText, bathrooms === 1 && styles.labelTextSelected]}>1+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bathrooms === 2 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(2)}>
              <Text style={[styles.labelText, bathrooms === 2 && styles.labelTextSelected]}>2+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bathrooms === 3 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(3)}>
              <Text style={[styles.labelText, bathrooms === 3 && styles.labelTextSelected]}>3+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, bathrooms === 4 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(4)}>
              <Text style={[styles.labelText, bathrooms === 4 && styles.labelTextSelected]}>4+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.labelButton, styles.labelButtonLast, bathrooms === 5 && styles.labelButtonSelected]}
              activeOpacity={1}
              onPress={() => setBathrooms(5)}>
              <Text style={[styles.labelText, bathrooms === 5 && styles.labelTextSelected]}>5+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={1}
          onPress={() => handleSearch()}>
          <Text style={styles.searchText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Filter;
