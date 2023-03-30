import React from 'react'

function TodoLists({todos,setTodos,setEditTodo}) {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if (item.id===todo.id){
                    return{...item,completed: !item.completed}
                }
            })
        )
    }
    const handleEdit=({id})=>{
        const findTodo= todos.find((todo)=>todo.id===id)
        setEditTodo(findTodo)
    }
  return (
    <div>
      {todos.map((todo)=>(
        <li className='list-item' key={todo.id}>
            <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" :"" }`} onChange={(e)=>e.preventDefault()}></input>
            <div>
                <button className='but-complete task-but' onClick={()=> handleComplete(todo)}>
                    <i className='fa fa-check-circle'></i>
                </button>
                <button className='but-edit task-but' onClick={()=> handleEdit(todo)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='but-del task-but' onClick={()=>handleDelete(todo)}>
                    <i className='fa fa-trash'></i>
                </button>
            </div> 
        </li>
           
        

      ))}
    </div>
    
  )
}

export default TodoLists
