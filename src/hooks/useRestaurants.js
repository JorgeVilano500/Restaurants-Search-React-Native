import {useState} from 'react'; 
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState({
        data: null, 
        loading: false, 
        error: null
    });

    const searchRestaurants = async (term) => {
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
                location: 'San Francisco'
            }
        }) 
        setResults({
            data: response.data.businesses,
            loading: true,
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