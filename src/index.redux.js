import { createStore } from 'redux';
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
function counter(state=10, action) {
    switch(action.type) {
        case ADD_GUN:
            return state+1;
        case REMOVE_GUN:
            return state-1;
        default:
            return 10;
    }
}
const store = createStore(counter);
store.subscribe(function() {
    console.log(store.getState())
})

export function addGun() {
    return store.dispatch({ type: ADD_GUN})
}
export function removeGun () {
    return store.dispatch({ type: REMOVE_GUN})
}
