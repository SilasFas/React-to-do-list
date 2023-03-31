import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName))
    // return if the task is not equal to the taskName
  }

  return (

    <div className="App">

      <div className='addTask'>
        <input onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>


      <div className='list'>
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>Delete Task</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default App;
