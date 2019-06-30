import { combineReducers } from 'redux'
import playerReducer from './playerReducer'
import filterReducer from './filterReducer'

const reducers = {
  filters: filterReducer,
  players: playerReducer,
}

export default combineReducers({
  ...reducers
});