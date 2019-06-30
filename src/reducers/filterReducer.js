import {
  GET_FIELDS
} from '../types/filterTypes'

const INIT_STATE = {
  name: '',
  age: '',
  position: '',
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_FIELDS:
      
      return {
        ...state,
        [payload.name]: payload.value
      };
  
    default:
      return state;
  }
}