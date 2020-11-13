const initialState = {}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                token: action.payload.jwt,
                ...action.payload.user,
            }
        default:
            return state;
    };
};

export default userReducer;