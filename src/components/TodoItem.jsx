import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdEditOff } from 'react-icons/md'

const TodoItem = ({todo ,handleEditTodod,handleDelete}) => {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState('');
  const handleEdit = ()=>{
    handleEditTodod(todo.id,text)
    setEditing(false)
  }
  const handleClearTodo = ()=>{
    handleDelete(todo.id)
  
  }

  return (
        <>
        <li className='list-item'>
             <div>
              {editing && ( <div>
           <form  className='input-container' action="">
          <input className='input' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Edit item' type="text" />
          <button  onClick={handleEdit} type='submit' className='btn'>Edit Todo</button>
          </form>
          </div>)}
              <p>{todo.text}</p>
              <span>
                <button onClick={handleClearTodo}><MdDelete /></button>
                <button onClick={()=> setEditing(editing =>!editing)}>{editing?<MdEditOff />:<FaEdit />}</button>
                </span>
             </div>
          

          
        </li>
        </>
  )
}

export default TodoItem