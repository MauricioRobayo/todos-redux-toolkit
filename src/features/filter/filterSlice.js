import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => action.payload
  }
})

export const { setVisibilityFilter } = filterSlice.actions

export default filterSlice.reducer