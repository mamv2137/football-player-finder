import {
  GET_PLAYERS,
  SET_FILTERED_DATA,
  ERROR
} from '../types/playersTypes'

const baseURL = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty'

export const getPlayers = () => async (dispatch) => {
  try {
    const res = await fetch(baseURL)
    let data = await res.json()

    data = data.map(el => ({
      ...el,
      age: calculateAge(el.dateOfBirth).toString()
    }))

    dispatch({
      type: GET_PLAYERS,
      payload: {
        data,
        players: data,
        loading: false
      }
    })
  } catch(error) {
    dispatch({
      type: ERROR,
      payload: {
        error: 'Hubo un error, intentalo mas tarde',
        loading: false
      }
    })
  }
}

export const applyFilter = () => (dispatch, getState) => {
  let data = getState().players.data
  let filters = getState().filters

  let filteredData = data

  for (const elem in filters) {
    const filter = filters[elem]
    if (filter.length > 0) {
      filteredData = filteredData.filter(player => player[elem].toLowerCase() === filter.toLowerCase())
    }
  }

  dispatch({
    type: SET_FILTERED_DATA,
    payload: {
      players: filteredData
    }
  })

}


const calculateAge = (date) => { // << TODO: pasar a Selector
  let today = new Date();
  let birthday = new Date(date);
  let age = today.getFullYear() - birthday.getFullYear();
  let month = today.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age = age - 1;
  }

  return age;
}