import { GET_FIELDS, LOADING } from '../types/filterTypes'

export const getFields = (name, value) => (dispatch, getState) => {
  dispatch({
    type: GET_FIELDS,
    payload: {
      name,
      value,
      loading: true
    }
  })
  dispatch({
    type: LOADING,
    payload: {
      loading: false
    }
  })
}