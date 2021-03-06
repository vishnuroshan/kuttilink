import * as actionType from '../actions/actionTypes';
import ck from '../../utils/cookies';

const initialState = () => Object.create({
    auth: ck.getToken ? true : false,
    urls: [],
    user: {}
})

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case actionType.SET_AUTH: {
            ck.SetToken = action.token;
            return { ...state, auth: true, user: action.user }
        }
        case actionType.SIGNOUT: {
            ck.removeToken();
            return initialState();
        }
        case actionType.SET_USER: {
            return { ...state, user: action.user };
        }
        default: {
            return state;
        }
    }
}

export default reducer;