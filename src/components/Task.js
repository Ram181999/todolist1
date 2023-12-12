import React from 'react'
import { useState } from 'react'

const Task = () => {
    const [todo,setTodo]=useState();
    const [todos, setTodos]=useState([]);
    console.log(todo);
    
const handlechange=(e)=>{
e.preventDefault();
// console.log(e.target.value);

if(todo.length!==0){
setTodos([...todos, todo]);
}
setTodo("");

}
  return (
    <div>
      <form onSubmit={handlechange}>
        <input type="text" onChange={(e) => setTodo(e.target.value)}></input>
        <button type="submit">+</button>
        <button type="submit">X</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task