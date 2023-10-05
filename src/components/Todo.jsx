import React from 'react'
import deletee from '../assets/icons8-delete-48.png'
import edit from '../assets/icons8-edit-48.png'

const Todo = ({id,message,setIsEditing,deleteTodo,setFormInput}) => {

    const sentUpdateCurrentTodo =(id,status,message)=>{
        setIsEditing(
            {
                id:id,
                status:true,
            }
        )
        setFormInput(message)
    }
  return (
    <div className='todo' data-id={id}>
        <div className="message">{message}</div>
        <div className="button-container">
            <button className="edit-btn" onClick={()=>sentUpdateCurrentTodo(id,true,message)}>
                <img src={edit} alt="" style={{width:24}}/>
            </button>
            <button className="delete-btn" onClick={()=>deleteTodo(id)}>
                <img src={deletee} alt="" style={{width:24}} />
            </button>
        </div>
    </div>
  )
}

export default Todo