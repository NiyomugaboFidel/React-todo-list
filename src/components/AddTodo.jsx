import React, {useState } from 'react'

const AddTodo = () => {
    const [text,setText] = useState('');

    const handleAddTodo = async () => {
      if (text.trim()) {
        const newTodo = { text, completed: false };
  
        const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });
  
        if (response.ok) {
          const addedTodo = await response.json();
          console.log('Todo added:', addedTodo);
          setText('');
        } else {
          console.error('Failed to add todo');
        }
      }
    }
 

  return (
    <div className='addtodo-container'>
        <div>
          <form  className='input-container' action="">
          <input className='input' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add item' type="text" />
          <button  onClick={handleAddTodo} type='submit' className='btn'>Add Todo</button>
          </form>
           
        </div>
    </div>
  )
}

export default AddTodo