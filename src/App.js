import './App.css';
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = () => {
    setTodoList()
  }

  return (
    <div className="App">

      <div className='addTask'>
        <input
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className='List'>

        {todoList.map((task, key) => {
          return (
            <div key={key}>
              <h1> {task} </h1>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          )




        })}

      </div>

    </div>
  );
}
export default App;
