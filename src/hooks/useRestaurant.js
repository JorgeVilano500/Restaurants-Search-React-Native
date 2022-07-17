import {useState, useEffect} from 'react'; 
import yelp from '../api/yelp';
import * as Location from 'expo-location';


export default () => {
    const [result, setResult] = useState({
        data: null, 
        loading: false, 
        error: null
    });

    const searchRestaurant = async (id) => {
        
        try{
            const response = await yelp.get(`/${id}`, { // can also do /search?term='desserts'&location='San Francisco' for the endpoint
        }) 
        setResult({
            data: response.data,
            loading: false,
            error: null
        })
    } catch (error) {
        setResult({
            data: null, 
            loading: false, 
            error: 'Something went wrong'
        })
    }
    
}
return [result, searchRestaurant]

}