import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed} : eachTodo))
  }

  
  useEffect(() => {
    // console.log("inside useEffect")
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    if(todos){
      setTodos(todos);
    }
  },[]);
  
  useEffect(() => {
    console.log("inside useEffect with todo dependency");
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  
  console.log("Inside the component but outside the useEffect");

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] h-screen w-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App
