import React from 'react'
import { StyleSheet, Text, View ,TextInput } from 'react-native'

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
                style={styles.input}
            />
        </View>
    )
}

export {SearchBar}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#eceff1' ,
        borderRadius : 5 ,
        margin : 2 ,
        // padding : 3 ,
        borderWidth : 1 ,
        borderColor : 'gray'

    },
    input : {
        fontSize : 17 ,
    }
})
