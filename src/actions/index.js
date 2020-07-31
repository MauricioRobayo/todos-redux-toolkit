import { createAction } from '@reduxjs/toolkit'

let nextTodoId = 0
export const addTodo = createAction('ADD_TODO', (text) => {
  return {
    payload: {
      id: nextTodoId++,
      text
    }
  }
})

export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER')

export const toggleTodo = createAction('TOGGLE_TODO')

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
