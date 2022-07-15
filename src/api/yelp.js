import axios from 'axios';


export default axios.create({ // this establishes the api endpoint for this site
    baseURL: `https://api.yelp.com/v3/businesses/`,
    headers: {
        Authorization: 'Bearer 4vNqxzGr1UEihR1mw-AIxQ9IcvTrBTE9CLzsu09DTXfiuNIaFdRnS2DfH893WkPM02Njt-8WtHD7b2DZJvtD_UzYN7jR6EsH1JuITlsQDmktL3r0uUUpYP13dGVIX3Yx'
    }
})