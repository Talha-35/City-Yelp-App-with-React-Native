import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const CityItem = (props) => {
    return (
        <TouchableOpacity 
            onPress = {props.onSelect}
            style={styles.conta}
        >
        <Icon name={'university'} size={15} color={'red'} style={{marginLeft : 120 ,marginTop : 7 , marginRight : 10}} />
        <Text  style={styles.text}>{props.cityName}</Text>
    </TouchableOpacity>
    )
}

export  {CityItem}

const styles = StyleSheet.create({
    conta : {
        margin : 1,
        padding : 5 ,
        backgroundColor : '#eceff1',
        flexDirection : "row" ,
        // justifyContent : "space-between"
    },
    text : {
        // fontWeight : "bold",
        fontSize : 20 ,
        textAlign : "center"
    }
})
