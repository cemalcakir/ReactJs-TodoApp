import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import React, {useState, useEffect} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);


  function getTodos() {
    const localTodos = localStorage.getItem("todos");
    if (localTodos !== null) {
      setTodos(JSON.parse(localTodos));
    };
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="App">
      <Header todos={todos} setTodos={setTodos} 
              filter={filter} setFilter={setFilter} ></Header>
      {todos.filter(element => ((element.completed === filter) || (filter === ""))).map(todo => {
          return <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          todo={todo} 
          index={todos.indexOf(todo)} 
          key={todos.indexOf(todo)} />
      })}
    </div>
  );
};

export default App;
