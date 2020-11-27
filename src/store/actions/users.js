import { SET_AUTH, SIGNOUT, SET_USER } from './actionTypes';

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

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}