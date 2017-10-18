import { combineReducers } from 'redux';
import artistReducer from './artistReducer';

const Reducers = combineReducers({
  artist: artistReducer,
})

export default Reducers;
