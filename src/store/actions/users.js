import { SET_AUTH, SET_URL_ARRAY, SIGNOUT, } from './actionTypes';
import API from '../../apis/url-api';
export const setAuth = (token, user) => {
    return {
        type: SET_AUTH,
        token,
        user
    }
}

export const signout = () => {
    return {
        type: SIGNOUT
    }
}

const setUrls = (urls, user) => {
    return {
        type: SET_URL_ARRAY,
        urls,
        user
    }
}

export const storeUrls = () => {
    return dispatch => {
        API.getUrls().then((urlData) => {
            console.log(urlData);
            return dispatch(setUrls(urlData.data, urlData.user))
        });
    }
}