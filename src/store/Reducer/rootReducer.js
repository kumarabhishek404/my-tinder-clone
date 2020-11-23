import cardReducer from './cardReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    cards: cardReducer
})

export default rootReducer;