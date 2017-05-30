export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const loadUser = (budget) => ({
    type: LOAD_USER,
    payload: {
        user
    }
});

export const loadUserFail = () => ({
    type: LOAD_USER_FAIL,
    payload: {
        status: LOAD_USER_FAIL
    }
});

export const userReducer = (userId, userName) => {
    return dispatch => {
        if(!userId) {
            dispatch(loadUserFail());
        }
        const userId = `budget_${userId}`;
        const user = {
            userId,
            name: userName
        };

        dispatch(loadUser(user))
    };
};
