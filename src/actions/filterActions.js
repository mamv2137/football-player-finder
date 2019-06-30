import { GET_FIELDS } from '../types/filterTypes'

export const getFields = (name, value) => (dispatch) => {
  dispatch({
    type: GET_FIELDS,
    payload: {
      name,
      value,
    }
  })
}