import { createSelector } from 'reselect'

const getData = state =>  state.players;
const getFilters = state => state.filters;

export const getFilteredData = createSelector(
  getData,
  getFilters,
  (data, filters) => {

    let filteredData = data.players

    for (const elem in filters) {
      const filter = filters[elem]
      if (filter.length > 0) {
        filteredData = filteredData.filter(player => player[elem].toLowerCase() === filter.toLowerCase())
      }
    }

    return filteredData
  }
)

export const getPositions = createSelector(
  getData,
  ({data}) => {
    
    let positions = []
    
    if (data.length > 0) {
      positions = [...new Set(data.map(player => player.position))]              
    }
        
    return positions
  }
)