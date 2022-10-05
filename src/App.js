import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./app.scss"
import Form from './components/Form'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const initialize = JSON.parse(localStorage.getItem("todos")) || [] 
  const [input,setInput] = useState("")
  const [todos, setTodos] = useState(initialize)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  })
  return (
    <div className="container">
        <Header />
      <div className="appWrapper">
        <div>
          <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodoList 
            todos = {todos}
            setTodos = {setTodos}
            setEditTodo = {setEditTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App