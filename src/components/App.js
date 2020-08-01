import React from 'react'
import Footer from '../features/filter/Footer'
import AddTodo from '../features/todos/AddTodo'
import VisibleTodoList from '../features/todos/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
