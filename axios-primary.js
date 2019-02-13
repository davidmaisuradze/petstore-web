import axios from 'axios';

import store from './store/store.init';
import {LOCALSTORAGE_TOKEN} from "./constants/global.constants";
import {getErrorMessage} from "./services/error";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
});

instance.interceptors.request.use(
    function (request) {
        console.log(request, 'request sent');
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
        if (token)
            request.headers.authorization = token;

        return request;
    }, function (error) {
        console.log(error, 'request error');
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        console.log(response, 'response received');
    }, function (error) {
        console.log(error, 'response error');

        const errorMessage = getErrorMessage(error);
        console.log(errorMessage, 'response error message');

        return Promise.reject(error);
    }
);

export default instance;