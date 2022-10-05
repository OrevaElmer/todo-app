import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { AiFillCheckSquare } from 'react-icons/ai';

function TodoList({todos, setTodos,setEditTodo}) {

const handleComplete =(todo)=>{
    setTodos(todos.map((item)=>{
        if(item.id===todo.id){
            return {...item,completed:!item.completed}
        }
        return item
    }))
}
const handleEdit =(todo)=>{
    setEditTodo(todos.find((item)=>item.id===todo.id))
}
const handleDelete =(todo)=>{
    setTodos(todos.filter((item)=>(item.id!==todo.id)))
}
return (
<div>
    {
    todos.map((todo)=>(
    <li className='listItem' key={todo.id}>
        <input 
            type="text" 
            className={`list ${todo.completed?"completed":""}`}
            value={todo.title}
            onChange={(e)=>e.preventDefault()}
        />
        <button 
            onClick={()=>handleComplete(todo)}
            className='buttonComplete'
        ><AiFillCheckSquare className='myicons' /> </button>
        <button 
            onClick={()=>handleEdit(todo)}
            className='buttonEdit'
        ><MdEdit className='myicons'/></button>
        <button 
            onClick={()=>handleDelete(todo)}
            className='buttonDelete'
        ><AiTwotoneDelete className='myicons'/></button>
    </li>
    ))
    }
</div>
)
}

export default TodoList

// import React from 'react'

// function TodoList({todos, setTodos, setEditTodo}) {
//   const handleComplete = (todo)=>{
//     setTodos(todos.map((item)=>{
//       if(item.id === todo.id){
//         return {...item, completed: !item.completed}
//       }
//       return item
//     }))
//   }

//   const handleEdit = (todo)=>{
//     const findTodo = todos.find((item)=>(item.id===todo.id))
//     setEditTodo(findTodo)
//   }
//   const handleDelete = (todo)=>{
//     setTodos(todos.filter((item)=>item.id!==todo.id))
//   }

//   return (
//     <div>
//       {todos.map((todo)=>(
//         <li
//           className='listItem'
//           key={todo.id}
//         >
//           <input 
//             type="text"
//             className= {`list ${todo.completed?"completed":""}`}
//             value={todo.title}
//             onChange={(e)=>e.preventDefault()}
//           />
//           <button 
//             className='buttonComplete'
//             onClick={()=>handleComplete(todo)}
//           >done</button>
//           <button 
//             onClick={()=>handleEdit(todo)}
//             className='buttonEdit'>edit</button>
//           <button
//             onClick={()=>handleDelete(todo)} 
//             className='buttonDelete'>delete</button>
//         </li>
//       ))}
//     </div>
//   )
// }

// export default TodoList