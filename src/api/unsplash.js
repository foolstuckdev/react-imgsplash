import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e2469c2032dc4331dcb2ccc5c84f56fda1d6a478c0768cea1ba3a9dd6dbbbcb2'
    }
})