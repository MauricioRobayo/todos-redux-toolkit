import { VisibilityFilters, setVisibilityFilter } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case setVisibilityFilter.type:
      return action.payload
    default:
      return state
  }
}

export default visibilityFilter
