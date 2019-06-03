import { combineReducers } from 'redux';

import playerReducer from './playerReducer';
import optionsReducer from './optionsReducer';

const reducers = combineReducers({
    playerReducer,
    optionsReducer
});

export default reducers;