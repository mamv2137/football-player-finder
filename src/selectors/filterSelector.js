
import { createSelector } from 'reselect'

export const getAgeField = state => state.age;
export const getNameField = state => state.name;
export const getPositionField = state => state.position

export const getAllFields = createSelector(
  getAgeField,
  (age) => {
    console.log('age', age)
    return age
  }
)
