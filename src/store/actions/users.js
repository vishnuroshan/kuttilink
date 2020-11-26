import { SET_AUTH, SIGNOUT, } from './actionTypes';

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

// const setUrls = (urls) => {
//     return {
//         type: SET_URL_ARRAY,
//         urls
//     }
// }

// export const storeUrls = () => {
//     return dispatch => {
//         API.getUrls().then((urlData) => {
//             console.log(urlData);
//             return dispatch(setUrls(urlData.data))
//         });
//     }
// }