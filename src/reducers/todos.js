import { addTodo, toggleTodo} from "actions"

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case toggleTodo.type:
      return state.map(todo =>
        (todo.id === action.payload)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
