import { createReducer } from '@reduxjs/toolkit'
import { addTodo, toggleTodo} from "actions"

const todos = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    })
  },
  [toggleTodo]: (state, action) => {
    state[action.payload].completed = !state[action.payload].completed
  }
})

export default todos
