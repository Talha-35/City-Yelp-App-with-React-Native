import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity , Image , Dimensions} from 'react-native'

const RestaurantItem = (props) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onSelect}
            >
            <Image
            style={styles.image}
            source={{uri : props.restaurant.image_url}}
            />
            <Text style={styles.text}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export  {RestaurantItem}

const styles = StyleSheet.create({
    image : {
        height : Dimensions.get("window").height / 3
    },
    text : {
        fontSize : 20
    },
    container :{
        padding  : 10 ,
        margin : 5 ,
        borderRadius : 10 ,
        backgroundColor : '#bdbdbd'
    }
})
