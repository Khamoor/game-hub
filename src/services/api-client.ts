import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2978e3b21fc74a6f9239eefe80bc57a5'
    }
})