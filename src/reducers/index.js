import { animalsReducer } from './animalsReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    animals: animalsReducer
});

export default rootReducer;