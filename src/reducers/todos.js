import { addTodo, toggleTodo} from "actions"

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      console.log(action);
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
        (todo.id === action.payload.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
