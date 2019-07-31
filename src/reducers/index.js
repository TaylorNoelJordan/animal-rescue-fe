import { animalsReducer } from './animalsReducer';
import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
    animals: animalsReducer,
    isLoading: loadingReducer,
    error: errorReducer
});

export default rootReducer;