import { VisibilityFilters, setVisibilityFilter } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case setVisibilityFilter.type:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
