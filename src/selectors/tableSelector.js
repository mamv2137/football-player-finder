import { createSelector } from 'reselect'

const getData = state =>  state.data;
const getFilters = state => state;

export const getFiltersFromState = createSelector(
  getFilters,
  (filters) => {
    console.log('filters', filters)
    return filters
  }
)

export const getFilteredData = createSelector(
  getData, getFiltersFromState,
  (data, filters) => {

    // const filters = {
    //   name,
    //   age,
    //   position
    // }

    let filteredData = data

    // if(filters.loading) {
    //   for (const elem in filters) {
    //     const filter = filters[elem]
    //     if (filter.length > 0) {
    //       filteredData = filteredData.filter(player => player[elem].toLowerCase() === filter.toLowerCase())
    //     }
    //   }
    // }


    console.log('filtered', data, filters)

    return filteredData

  }
)

export const getPositions = createSelector(
  getData,
  (data) => {
    let positions = []

    if (data.length > 0) {
      positions = [...new Set(data.map(player => player.position))]              
    }

    return positions
  }
)