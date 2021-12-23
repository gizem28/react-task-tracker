import React from 'react'
import Task from "../components/Task"

const Tasks = ({tasks}) => {
    console.log("tasks",tasks);
    return (
        <div>
           {tasks.map((task)=>(<Task key={task.id} task={task}/>))}
        </div>
    )
}

export default Tasks;
