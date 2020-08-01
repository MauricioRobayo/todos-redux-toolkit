import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text, completed } = action.payload
        state.push({ id, text, completed })
      },
      prepare(text) {
        return {
          payload: {
            id: nextTodoId++,
            text,
            completed: false
          }
        }
      }
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  
})

export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer