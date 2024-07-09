import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


const App = () => {
  const [todos , setTodos] = useState([]);
  const [off , setOff] = useState(false);
  

  useEffect(()=>{
  fetch('http://localhost:3000/todos')
  .then(res => res.json())
  .then(data=>setTodos(data));
  // if(!todos.length == 0 || todos.length > 0){
  //   setOff(false)
  //   }else{
  //     setOff(true)
  //   }
  },[todos]);

 const handleEditTodod = async(id,updateText)=>{
  const response = await fetch(`http://localhost:3000/todos/${id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({text:updateText})
  })

  if(response.ok){
    const updateTodo = await response.json()
    setTodos([todos.map(todo=> (todo.id == id? updateTodo :todo))]);
  }
 } 
 const handleDelete = async(id)=>{
  const response = await fetch(`http://localhost:3000/todos/${id}`,{
    method:'DELETE',
  })
  if(response.ok){
    setTodos([todos.filter(todo=>(todo.id !== id))])
  }
}
 
  return (
    <div className='container'>
   <div className='container-2'>
      <Header />
      <AddTodo />
      <TodoList handleDelete={handleDelete} handleEditTodod={handleEditTodod} todos={todos} off={off}/>
   </div>
    </div>
  )
}

export default App