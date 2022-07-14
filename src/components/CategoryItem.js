import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { elevation } from "./common/styles";

// button is only a small button not the whole component, self closing
// touchableOpacity wraps around the entire cimponent 

export default function CategoryItem(props) { //or use {name, imageUrl, handlePress} as props object in the parameters
    return(
        <TouchableOpacity
        onPress={props.handlePress}
        >
        <View style={[
            styles.container, 
            styles.elevation, 
            props.index === 0 ? {marginLeft: 25} : {marginLeft: 15}, 
            props.active ? {backgroundColor: 'rgb(241, 186, 87)'} : {backgroundColor: 'white'}
        ]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.imageUrl} />
            </View>
            <Text style={styles.header}>{props.name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70, 
        height: 100, 
        borderRadius: 500, 
        marginVertical: 15,
        backgroundColor: 'white', //rgb(241, 186, 87) is the active color
        alignItems: 'center',
        justifyContent: 'center'
    },
    elevation,
    image: {
        width: 35, 
        height: 35
    },
    imageContainer: {
        width: 50, 
        height: 50, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 50, 
        marginBottom: 5
    }, 
    header : {
        fontWeight: 'bold'
    }
})