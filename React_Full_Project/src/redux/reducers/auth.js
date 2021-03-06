import * as ACTION from '../constants/auth';

import Auth from '../Auth';

const initialState = {
    fetching: false,
    user: {},
    error: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.REGISTER_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.REGISTER_SUCCESS:
            Auth.setToken(action.response.user.token);
            Auth.authenticateUser(action.response.user);
            return {
                ...state,
                fetching: false,
                user: action.response.user,
            };
        case ACTION.REGISTER_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        case ACTION.LOGIN_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.LOGIN_SUCCESS:
            Auth.setToken(action.response.user.token);
            Auth.authenticateUser(action.response.user);
            return {
                ...state,
                fetching: false,
                user: action.response.user,
            };
        case ACTION.LOGIN_FAILURE:
            Auth.removeToken();
            Auth.removeAuthenticateUser();

            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };
        case ACTION.LOGOUT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.LOGOUT_SUCCESS:
            Auth.removeToken();
            Auth.removeAuthenticateUser();
            return {
                ...state,
                fetching: false,
                user: {},
            };
        case ACTION.LOGOUT_FAILURE:
            Auth.removeToken();
            Auth.removeAuthenticateUser();

            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };

        default:
            return state;
    }
};
export default auth;
