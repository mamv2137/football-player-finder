import {
  GET_FIELDS,
  LOADING
} from '../types/filterTypes'

const INIT_STATE = {
  name: '',
  age: '',
  position: '',
  loading: false
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_FIELDS:
      
      return {
        ...state,
        [payload.name]: payload.value
      };

    case LOADING:

      return {
        ...state,
        loading: payload.loading
      }
  
    default:
      return state;
  }
}