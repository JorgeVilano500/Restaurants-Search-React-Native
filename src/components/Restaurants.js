import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from '../hooks/useRestaurants';
import {useEffect, useState} from 'react';
import RestaurantItem from "./RestaurantItem";

import * as Location from 'expo-location';

export default function Restaurants({term}, setLoading) {
    const [{data, loading, error}, searchRestaurants] = useRestaurants();
    
    const [getLocation, setGetLocation] =  useState();
    const [pin, setPin] = useState({
        latitude: 37.78825,
            longitude: -122.4324,
      })
    
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
           setPin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            })
            let regionName = await Location.reverseGeocodeAsync({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            })
            setGetLocation(regionName[0].city);
            console.log(regionName[0].city);
            console.log(pin)
            setLoading(false);
        })();
        searchRestaurants(term, pin);
        console.log(getLocation)

    }, [term])
    

    if(loading) {
        return <ActivityIndicator size="large" marginVertical={30} />
    }

    if(error) {
        return (
            <View>
                <Text style={styles.header} >There is an Error</Text>
            </View>
        )
    }
    //example of having an array of styles, one containing an object with styles and another refering an object with style
    return(
        <View style={[styles.container, {flex:1}]}> 
            <Text style={styles.header}>Top Restaurants</Text>  
            <FlatList 
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({item}) => (
                <RestaurantItem restaurant={item} />
            )}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15, 
    },
    header: {
        fontWeight: 'bold', 
        fontSize: 20, 
        paddingBottom: 10,
    }
})