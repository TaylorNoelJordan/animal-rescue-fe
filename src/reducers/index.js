import { animalsReducer } from './animalsReducer';
import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { donationsReducer } from './donationsReducer';

const rootReducer = combineReducers({
    animals: animalsReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    donations: donationsReducer
});

export default rootReducer;