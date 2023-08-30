// eslint-disable-next-line no-unused-vars
import React from 'react'

const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='What is the task today?'/>
        <button  type ="submit" className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm;