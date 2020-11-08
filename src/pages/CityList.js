import React, { useState , useEffect } from 'react'
import { StyleSheet, Text, View ,Button,FlatList, TouchableOpacity } from 'react-native'
import Axios from 'axios'

import {CityItem , SearchBar} from '../components'

let originalList = [];

const CityList = (props) => { 
    const [city, setCity] = useState([])
  

    const fetchCityData = () => {    
        Axios.get('http://opentable.herokuapp.com/api/cities')
        .then((response) => {
            setCity(response.data.cities)    
            originalList = [...response.data.cities];       
        })
    }

    // const fetchCityData = async () => {    
    //    const response = await Axios.get('http://opentable.herokuapp.com/api/cities')
    //     setCity(response.data)         
    // }

    
    useEffect(() => {
        fetchCityData();
    }, [])
    
    const renderData = ({item}) => <CityItem 
        cityName={item} 
        onSelect={() => props.navigation.navigate('Restaurants', { selectedCity: item })}
        />

    const renderSeperator = () => <View style={{borderWidth : 0.5 , borderColor : 'gray'}}/>

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })
        setCity(filteredCities);
    }
    // yukardaki ile aynı sonucu verir
    // const searchCity = () => {

    // }
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>...City Search...</Text>
            </View>
            <SearchBar
                placeholder='Search a City ....'
                onSearch={value => searchCity(value)}
            />
            
            <FlatList
                keyExtractor={((item,index) => index.toString()) }
                data={city}
                renderItem={renderData}
                ItemSeparatorComponent={renderSeperator}
          

            />
            {/* <Button title='click ' onPress={()=> props.navigation.navigate('Restaurants') }/>
            <Button title='data ' onPress={()=> fetchCityData() }/> */}
        </View>
    )
}

export  {CityList}

const styles = StyleSheet.create({
    header : {
        backgroundColor : 'black',
        padding : 10

    },
    headerText : {
        fontSize : 25 ,
        color : 'white' ,
        textAlign :  "center"
    }
})
