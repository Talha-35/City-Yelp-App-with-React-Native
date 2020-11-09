import React, {useState, useEffect} from 'react';
import {get} from 'axios';
import {StyleSheet, Linking, Text, Image, View, Dimensions, TouchableOpacity} from 'react-native';



const RestaurantDetail = (props) => {
  const [restaurantPhotos , setRestaurantPhotos ] = useState([]);  
  const {item} = props.route.params;

  const fetchPhotos = () => {
    get('https://random-data-api.com/api/restaurant/random_restaurant')
    .then((response) => {
      setRestaurantPhotos(response.data)
    })
  }
  // ASYNC-AWAIT version
  // const fetchPhotos = async () => {
  //   const response = await get('https://random-data-api.com/api/restaurant/random_restaurant')
  //   .then((response) => {
  //     setRestaurantPhotos(response.data)
  //   })
  // }

  useEffect(() => {
    fetchPhotos();
  }, [])

  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>


      <Image
        style={styles.image}
        source={{uri: restaurantPhotos.logo}}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.address}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.area}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.phone}</Text>
      </View>
      <View style={[styles.infoContainer1, {backgroundColor : item.price > 2 ? 'red' : '#607d8b' }]}>
        <Text style={styles.infoText}>Price :  
        {
          item.price < 3  ? '  Affordable   😊' : '  Expensive   🤑'
        }
        </Text>
      </View>

      <TouchableOpacity
        style={styles.touch1}>
        <Text style={styles.touchText1}
        onPress={() => Linking.openURL(item.reserve_url)}>
        Go To Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  conta2 : {
    flexDirection  :"row" ,
    justifyContent : "space-around"
  },
  name: {
      fontWeight: '300', 
      fontSize: 35 ,
      fontWeight : "bold",
      textAlign : "center",
      marginTop : 10 ,
      backgroundColor : '#607d8b',
      padding : 10      ,
      color : '#ededed'
},
  image: {
      height: Dimensions.get('window').height / 3 ,
      width: Dimensions.get('window').width * 0.98 ,
      marginLeft: 4 ,
      marginVertical : 10
  },
  infoContainer: {
    backgroundColor: '#607d8b',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginVertical : 5
  },
  infoContainer1: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginVertical : 5
  },
  infoText: {
      color: 'white', 
      fontWeight: 'bold',
      fontSize : 18
    },
  touch1: {
      marginTop : 30,
    backgroundColor: '#002424',
    marginHorizontal: 80,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  touchText1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffff1f',
    fontWeight : "bold"
  }, 
});
