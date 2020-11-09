import Axios from 'axios'
import React, {useState ,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'

import {RestaurantItem, SearchBar, Button} from '../components'

let originalRestaurantList = [];

const RestaurantList = (props) => {
    const [restaurantList, setRestaurantList] = useState([]);

    const {selectedCity} = props.route.params

    const fetchRestaurants = () => {
    Axios.get(
        'http://opentable.herokuapp.com/api/restaurants' , 
        {
            params : {
                city : selectedCity
            }
    })
    .then(response => {
        setRestaurantList(response.data.restaurants)
        originalRestaurantList = [...response.data.restaurants]
    } )
}

    const renderRestaurant = ({item}) =>  <RestaurantItem 
                            restaurant= {item}
                            onSelect={() => props.navigation.navigate('Details' ,
                            {
                                item : item
                            })}
                            /> 


    const searchRestaurant = (search) => { 
        const filteredRestaurants = originalRestaurantList.filter(restaurant =>{
            const text = search.toUpperCase() ;
            const restaurantName = restaurant.name.toUpperCase() ;

            return restaurantName.indexOf(text) > -1;

        })
        setRestaurantList(filteredRestaurants)        
    }


    useEffect(() => {
        fetchRestaurants() ;
    }, [])

    return (
        <View style={{flex : 1}}>
            <SearchBar 
                style={{marginTop : 50}}
                placeholder='Search a Restaurant ....'
                onSearch={value => searchRestaurant(value)}
            />
            <FlatList
                keyExtractor={((item,index) => index.toString()) }
                data={restaurantList}
                renderItem={renderRestaurant}
            />
            <Button
                onData={() => props.navigation.goBack()}
                title='Go Back'
                style1={styles.touch}
                style2={styles.touchText}
            />            
            <Button
                onData={() => props.navigation.goBack()}
                title='Main Page'               
            />            
            
        </View>
    )
}

export {RestaurantList}

const styles = StyleSheet.create({
    touch : {
        marginVertical : 5,
        backgroundColor : '#263238',
        marginHorizontal : 80,
        padding : 10 ,
        borderRadius : 10
    },
    touchText : {
        fontSize : 25,
        textAlign : "center",
        color : 'white'
    }
})
