import axios from 'axios';
import ck from '../utils/cookies';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

httpClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const AuthInterceptor = config => {
    config.headers = { 'Access-Control-Allow-Origin': '*' };
    const token = ck.getToken;
    if (token) {
        config.headers = { 'Authorization': token }
    }
    return config;
};

httpClient.interceptors.request.use(AuthInterceptor, err => {
    console.log(err);
});

httpClient.removeAuthInterceptor = () => {
    console.log('Removing auth header', { httpClient });
    httpClient.interceptors.request.eject(AuthInterceptor);
}

export default httpClient;