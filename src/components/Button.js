import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={props.style1 ? props.style1 : styles.touch}
            onPress={() => props.onData()}
            >
                <Text style={props.style2 ? props.style2 : styles.touchText}>{props.title}</Text>
            </TouchableOpacity>
    )
}

export {Button}

const styles = StyleSheet.create({
    touch : {
        marginVertical : 5,
        backgroundColor : 'white',
        marginHorizontal : 80,
        padding : 10 ,
        borderRadius : 10,
        borderWidth : 1
    },
    touchText : {
        fontSize : 25,
        textAlign : "center",
        color : 'black'
    }
})
