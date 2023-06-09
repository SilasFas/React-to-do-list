import './App.css';
import { useState } from 'react';
import { Task } from './Components/Task'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
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
            <Task
              key={task.id}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          )
        })}
      </div>
    </div>
  );
}
export default App;