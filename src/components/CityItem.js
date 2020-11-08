import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CityItem = (props) => {
    return (
        <TouchableOpacity 
            onPress = {props.onSelect}
            style={styles.conta}
        >
        <Text  style={styles.text}>{props.cityName}</Text>
    </TouchableOpacity>
    )
}

export  {CityItem}

const styles = StyleSheet.create({
    conta : {
        margin : 1,
        padding : 5 ,
        backgroundColor : '#eceff1'
    },
    text : {
        // fontWeight : "bold",
        fontSize : 20 ,
        textAlign : "center"
    }
})
