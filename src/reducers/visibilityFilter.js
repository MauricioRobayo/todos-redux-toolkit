import { createReducer } from '@reduxjs/toolkit'
import { VisibilityFilters, setVisibilityFilter } from '../actions'

const visibilityFilter = createReducer(VisibilityFilters.SHOW_ALL, {
  [setVisibilityFilter]: (state, action) => action.payload 
})

export default visibilityFilter
