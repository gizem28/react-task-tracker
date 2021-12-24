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


  //*Add Task Fetch Function
  // const addTask = async(newTask)=>{
  //   const res = await fetch(baseUrl,{
  //     method:"POST",
  //     headers:{
  //       "Content-type":"application/json"
  //     },
  //     body:JSON.stringify(newTask)
  //   });
  //   fetchTask(res);
  // };

  //*Add Task Axios
  const addTask = async(newTask)=>{
    const res =await axios.post(baseUrl, newTask)
    fetchTask(res);
  }

  // const addTask = (newTask) => {
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = {
  //     id,
  //     ...newTask
  //   };
  //   setTasks([...tasks, addNewTask])
  // }

  //*Delete Task
  // const deleteTask = (deletedTaskId) => {
  //   console.log("delete", deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  // }

  //*Delete with Fetch
  // const deleteTask= async (deletedTaskId)=>{
  // await fetch(`${baseUrl}/${deletedTaskId}`, {
  //   method:"DELETE",
  // });
  // fetchTask();
  // };

  //*Delete with Axios
  const deleteTask = async(deletedTaskId)=>{
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTask();
  }

  //*Toggle Done
  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) => task.id === toggleDoneId ? {
  //       ...task,
  //       isDone: !task.isDone
  //     } : task)
  //   )
  // }

  //*Toggle Done Fetch
    const toggleDone = async(toggleDoneId)=>{
    // const res= await fetch(`${baseUrl}/${toggleDoneId}`)
    // const data =await res.json();
    // const updatedTask={...data, isDone: !data.isDone};
  //   await fetch(`${baseUrl}/${toggleDoneId}`, {
  //     method:"PUT",
  //     headers:{
  //       "Content-type":"application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });
  //   fetchTask();
  // };

   //*Toggle Done Axios
   const {data}=await axios.get(`${baseUrl}/${toggleDoneId}`);
   const updatedTask={...data, isDone:!data.isDone};

   await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
   fetchTask();
  };
   

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