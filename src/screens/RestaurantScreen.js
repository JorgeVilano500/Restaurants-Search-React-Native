import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { useEffect } from "react";
import useRestaurant from '../hooks/useRestaurant';


export default function RestaurantScreen({navigation}) {
    const [{data, loading, error}, searchRestaurant] = useRestaurant();
    const id = navigation.getParam('id');

    const dimensions = Dimensions.get('window')
    const imageWidth = dimensions.width;
    const imageHeight = Math.round((dimensions.width * 9)/16)

    useEffect(() => {
        searchRestaurant(id);
    }, [])

    console.log(data)
    if (loading) return <Text>Loading...</Text>
    if(error) return <Text>{error}</Text>

    return (
        <View>
           
           {data && (
                <FlatList 
                data={data.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => <Image style={{height: imageHeight, width: imageWidth}} source={{uri: item}} />}
                />
           )}
        </View>

    )

}

