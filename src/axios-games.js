import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://halitorus.firebaseio.com/'
});

export default instance;