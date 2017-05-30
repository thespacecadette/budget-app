import { LOAD_USER, LOAD_USER_FAIL } from './actions';

const initalState = {
    userId: '',
    status: '',
    name: 'Tammy'
}

export const fetchUser = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return Object.assign({}, state, {
                user: action.payload.user,
            })
        case LOAD_USER_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        default:
            return state
    }
}