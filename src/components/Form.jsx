import React from 'react'

const Form = ({formInput,setFormInput,submitHandler,isEditing,updateTodo,setAlert}) => {
    
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(!formInput){
            setAlert({status:true,type:"danger",message:"please Enter something"});
            return;
        }
        submitHandler({
            id:new Date().getTime().toString(),
            message:formInput,
        })
        setFormInput("");
    }
    const updateCurrentTodo=(e)=>{
        e.preventDefault();
        if(!formInput){
            setAlert({status:true,type:"danger",message:"please Enter something"});
            return;
        }
        const newTodo={
            id: isEditing.id,
            message: formInput,
        }
        updateTodo(newTodo);
        setFormInput("");
    }
  return (
    <div className='form-container'>
        <form >
            <input type="text" className='form-input' value={formInput} onChange={(e)=>setFormInput(e.target.value)} placeholder='write something'/>
            {
                isEditing.status ?
                <button className="submit-btn" type="submit" onClick={updateCurrentTodo}>edit</button> :
                <button className="submit-btn" type="submit" onClick={handleFormSubmit}>submit</button> 
                

            }
        </form>
    </div>
  )
}

export default Form