export const UPDATE_BUDGET_FREQUENCY = 'UPDATE_BUDGET_FREQUENCY';
export const UPDATE_BUDGET_FREQUENCY_FAIL = 'UPDATE_BUDGET_FREQUENCY_FAIL';

export const updateFrequency = (frequency) => ({
    type: UPDATE_BUDGET_FREQUENCY,
    payload: {
        status: 'Updated budget frequency',
        frequency,
    }
});

export const updateFrequencyFail = () => ({
    type: UPDATE_BUDGET_FREQUENCY_FAIL,
    payload: {
        status: 'Failed to update budget frequency! '
    }
});

export const updateBudgetFrequency = (frequency) => {
    return dispatch => {
        if(!frequency) {
            dispatch(updateFrequencyFail());
        }
        console.log('frequency', frequency)

        dispatch(updateFrequency(frequency));
    };
};
