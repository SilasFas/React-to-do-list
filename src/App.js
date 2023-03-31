import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }
  return (

    <div className="App">

      <div className='addTask'>

        <input onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={addTask}>Add Task</button>



      </div>


      <div className='list'>
        {todoList.map((task) => {
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}
export default App;
