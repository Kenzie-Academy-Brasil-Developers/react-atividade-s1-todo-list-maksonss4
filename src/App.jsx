import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo (newTodo) {
    setTodos([...todos, newTodo])
  }

  function handleTodo (task) {
    const removeTask = todos.filter(item => {
      return item !== task
    })
    setTodos(removeTask)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Liste suas tarefas</h1>
        <Form addTodo={addTodo}></Form>
        <TodoList todos={todos} handleTodo={handleTodo}></TodoList>
      </div>
    </div>
  );
}

export default App;
