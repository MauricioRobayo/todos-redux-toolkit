import { combineReducers } from 'redux'
import todosReducer from '../features/todos/todosSlice'
import visibilityfilterReducer from '../features/filter/filterSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityfilterReducer,
})
