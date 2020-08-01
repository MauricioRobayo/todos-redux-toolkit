import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')
  const onChange = (e) => setTodoText(e.target.value)
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!todoText.trim()) {
          return
        }
        addTodo(todoText)
        setTodoText('')
      }}>
        <input type='text' name='todo' value={todoText} onChange={onChange} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)
