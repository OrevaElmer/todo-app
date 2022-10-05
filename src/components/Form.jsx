import React from 'react'
import { useEffect } from 'react'
import {v4 as uuidv4} from "uuid"

function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}) {
  const updateTodo = (id,title,completed)=>{
    setTodos(todos.map((item)=>{
      if(item.id===id){
        return {...item, id, title, completed}
      }else{
        return item
      }
    }))
    setEditTodo("")
  }

  useEffect(()=>{
    (editTodo)? setInput(editTodo.title): setInput("")
  },[editTodo, setInput])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!editTodo){
      setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
      setInput("")
    }else{
      updateTodo(editTodo.id,input,editTodo.completed)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Enter Todo...'
        className='taskInput'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        required
      />
      <button
        className='buttonAdd'
        type='submit'
      >{editTodo?"Edit":"Add"}</button>
    </form>
  )
}

export default Form

