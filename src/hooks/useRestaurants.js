import {useState} from 'react'; 
import yelp from '../api/yelp';


export default () => {
    

    const [results, setResults] = useState({
        data: null, 
        loading: false, 
        error: null
    });

    const searchRestaurants = async (term, getLocation) => {
        setResults({
            data: null, 
            loading: true, 
            error: null
        })
        try{
            const response = await yelp.get(`/search`, { // can also do /search?term='desserts'&location='San Francisco' for the endpoint
            params: {
                limit: 15, 
                term: term,
                latitude: getLocation.latitude, 
                longitude: getLocation.longitude

            }
        }) 
        setResults({
            data: response.data.businesses,
            loading: false,
            error: null
        })
    } catch (error) {
        setResults({
            data: null, 
            loading: false, 
            error: 'Something went wrong'
        })
    }
    
}
return [results, searchRestaurants]

}