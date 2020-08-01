import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from './todosSlice'
import { VisibilityFilters } from '../filter/filterSlice'
import TodoList from './TodoList'

const selectTodos = (state) => state.todos
const selectFilter = (state) => state.visibilityFilter
const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }
)

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
})

const mapDispatchToProps = {
  toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
