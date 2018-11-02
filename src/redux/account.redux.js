const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
export function user(state= { logIn: false , user: {}}, action) {
    switch (action.type) {
        case LOGIN:
            return state = {...state, logIn: true};
        case LOGOUT:
            return state = {...state, logIn: false};
        default:
            return state;
    }
}
export function setLogin(data) {
    return { type: LOGIN, preload: data}
}
export function setLogOut(data) {
    return { type: LOGOUT, preload: data}
}