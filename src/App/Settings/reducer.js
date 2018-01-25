import {
    UPDATE_BUDGET_FREQUENCY,
    UPDATE_BUDGET_FREQUENCY_FAIL,
} from './actions';

const initalState = {
    frequency: 'annually',
};

export const fetchSettings = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_BUDGET_FREQUENCY:
            return Object.assign({}, state, {
                status: action.payload.status,
                frequency: action.payload.frequency
            })
        case UPDATE_BUDGET_FREQUENCY_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        default:
            return state
    }
}