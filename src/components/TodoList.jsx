import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,off,handleEditTodod,handleDelete}) => {
  return (
    <div className='todolist-container'>
         <div className='contaner-list'>
            <div className='scole'>
                <div className='scole-left'>Tarefas criadas <span>{todos.length}</span></div>
                <div className='scole-right'>Concluídas <span>0</span></div>
            </div>
           <ul className='ul-list'>
            { off&&    <p>Você ainda não tem tarefas cadastradas
                Crie tarefas e organize seus itens a fazer</p>}
            {
                todos.map(item=>{
                    return <TodoItem handleDelete={handleDelete} handleEditTodod={handleEditTodod}  key={item.id} todo={item} />
                })


            }
           </ul>
         </div>
    </div>
  )
}

export default TodoList