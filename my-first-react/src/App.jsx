import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); // clear input
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📝 My Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo} style={{ marginLeft: "1rem" }}>
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => removeTodo(index)}
            style={{
              cursor: "pointer",
              margin: "0.5rem 0",
              textDecoration: "underline"
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

