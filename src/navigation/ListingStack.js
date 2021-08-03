import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingDetails, ImageSlider } from '../screens';
import ListingHeaderRight from '../components/ListingHeaderRight';

const ListingStack = createStackNavigator();

const ListingStackScreen = ({route, navigation}) => {
  const [listing, setListing] = useState({})
  const [agent, setAgent] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  // const [active, setActive] = useState(0)

  useEffect(() => {
    fetch(`https://www.hauzzy.com/api/properties/${route.params.listingId}`)
      .then(response => response.json())
      .then(res => {
        setListing(res)
        console.log(res)
        return fetch(`https://www.hauzzy.com/api/agents/${res.agent_id}`)
      })
      .then(response => response.json())
      .then(res => {
        setAgent(res)
        setIsLoading(false)
        console.log(res)
      })
  }, [route.params.listingId])

  // const handleScroll = (nativeEvent) => {
  //   console.log(nativeEvent)
  //   let slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
  //   console.log(slide)
  //   if (slide !== active) {
  //     slide = slide + 1
  //     setActive(slide)
  //     console.log(slide)
  //   }
  // }

  return (
    <ListingStack.Navigator>
      <ListingStack.Screen
        name="ListingDetails"
        options={{
          title: '',
          headerTintColor: 'gray',
          headerBackTitleVisible: false,
          headerRightContainerStyle: {paddingRight: 16},
          headerRight: () => <ListingHeaderRight/>
        }}>
          {() => <ListingDetails listing={listing} agent={agent} isLoading={isLoading}/>}
      </ListingStack.Screen>
        <ListingStack.Screen
          name="ImageSlider"
          options={{
            title: 'Fotos',
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {backgroundColor: '#000'},
            // cardStyleInterpolator: () =>  ({cardStyle: {opacity: 1}})
          }}>
          {() => <ImageSlider images={listing['PropertyPictures']}/>}
        </ListingStack.Screen>
    </ListingStack.Navigator>
  )
}

export default ListingStackScreen;
