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
    const todo = state.find((state) => state.id = action.payload)
    if (todo) {
      todo.completed = !todo.completed
    }
  }
})

export default todos
