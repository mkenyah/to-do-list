// // eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4()

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]); // Use square brackets here to initialize the state array

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
     
      <Todo />
   
    </div>
  );
};

export default TodoWrapper;
