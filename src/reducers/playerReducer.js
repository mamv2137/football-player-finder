import {
  GET_PLAYERS,
  SET_FILTERED_DATA,
  LOADING,
  ERROR
} from '../types/playersTypes'

const INIT_STATE = {
  data: [],
  players: [],
  loading: true,
  error: ''
}

export default ( state = INIT_STATE, { type, payload } ) => {
  switch (type) {
    case GET_PLAYERS:
      
      return { 
        ...state, 
        data: payload.data,
        players: payload.players,
        loading: payload.loading
      }

    case SET_FILTERED_DATA:
      
      return { 
        ...state, 
        players: payload.players,
      }

    case LOADING: 

      return {
        ...state,
        loading: payload.loading
      }

    case ERROR: 
    
      return{
        ...state,
        error: payload.error,
        loading: payload.loading
      }
  
    default:
      return state;
  }
}