import './App.css';
import Header from './components/Header';
import {
  useState, useEffect
} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false)

  const baseUrl = "http://localhost:5000/tasks";

//Create Read Update Delete

//Fetch tasks
// const fetchTask= async()=>{
//   const res = await fetch(baseUrl)
//   const data =await res.json();
//   console.log(data)};

//Fetck Task with axios
const fetchTask=async()=>{
  // const res= await axios.get(baseUrl);
  const {data}= await axios.get(baseUrl);
  setTasks(data);
};

useEffect(()=>{
  fetchTask()
  }, [])


  //Add Task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = {
      id,
      ...newTask
    };
    setTasks([...tasks, addNewTask])
  }

  //Delete Task
  const deleteTask = (deletedTaskId) => {
    console.log("delete", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  }

  //Toggle Done
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) => task.id === toggleDoneId ? {
        ...task,
        isDone: !task.isDone
      } : task)
    )
  }

  //SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  return ( <
    div className = "container" >
    <
    Header title = "Task Tracker"
    showAddTask = {
      showAddTask
    }
    toggleShow = {
      toggleShow
    }
    />

    {
      showAddTask && < AddTask addTask = {
        addTask
      }
      />}

      {
        tasks.length > 0 ? ( < Tasks tasks = {
            tasks
          }
          deleteTask = {
            deleteTask
          }
          toggleDone = {
            toggleDone
          }
          />
          ):( 
            <p style = {{
              textAlign: "center",
              color: "gray"
            }} > No Task To Show </p>
        )} </div>
    );
  }

export default App;