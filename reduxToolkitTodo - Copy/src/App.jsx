import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './features/todo/todoSlice'

function App() {
  // console.log("Inside app");
  // const [todos, setTodos] = useState(useSelector(state => state.todos));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   console.log('inside getting useEffect');
  //   if(todos && todos.length > 0){
  //     // setTodos(todos);
  //     todos.forEach((todo) => dispatch(addTodo(todo.text)));
  //     // dispatch(addTodo())
  //   }
  // },[])
  
  // useEffect(() => {
  //   console.log('inside setting useEffect');
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // },[todos])
  
  return (
    <>
      <h1 className='text-3xl text-white font-bold'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
