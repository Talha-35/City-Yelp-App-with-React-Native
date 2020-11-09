import React from 'react';
import {StyleSheet, Linking, Text, Image, View, Dimensions, TouchableOpacity} from 'react-native';

// address: "4021 Beltline Road #101"
// area: "Dallas - Fort Worth"
// city: "Addison"
// country: "US"
// id: 5526
// image_url: "https://www.opentable.com/img/restimages/5526.jpg"
// lat: 32.95526
// lng: -96.844675
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=5526"
// name: "Lefty's"
// phone: "9727749518x"
// postal_code: "75001"
// price: 2
// reserve_url: "http://www.opentable.com/single.aspx?rid=5526"
// state: "TX"

const RestaurantDetail = (props) => {
  const {item} = props.route.params;

  console.log(item);

  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>


      <Image
        style={styles.image}
        source={{uri: item.image_url}}
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
