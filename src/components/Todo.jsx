// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = () => {
  return (
    <div className='Todo'>
        <p>go to school</p>
       
        <div>
        <FontAwesomeIcon icon={faPenToSquare}  />
        <FontAwesomeIcon icon={faTrash}  />
        </div>
    </div>
  )
}

export default Todo