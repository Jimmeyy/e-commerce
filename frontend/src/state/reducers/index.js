import { combineReducers } from 'redux';

import userReducer from 'state/reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;