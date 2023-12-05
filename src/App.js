import { useState } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
const App=()=> {
    const [showAddTask,setShowAddTask]=useState(false) // default value is false


  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ])

    //Add Task

    const addTask=(task)=>{
      const id=Math.floor(Math.random()*10000)+1
      const newTask={id,...task} // newTask is an object with id and all the properties of task
      setTasks([...tasks,newTask]) // we can't do tasks.push(newTask) because tasks is a state and we can't change it directly. ...tasks copies all the elements of tasks array and newTask is added to the end of the array 
    }

    // Delete Task
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    // Toggle Reminder
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task)) // ...task means copy all the properties of task
      // if task.id===id then change the reminder property to !task.reminder else return task
      // tasks.map() returns a new array so we have to setTasks() to the new array
      // ((task)=>task.id===id?{...task,reminder:!task.reminder}:task) is a function that is passed to tasks.map() as an argument which is executed for each element of tasks array and returns a new array 

    }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask}/>:'No Tasks To Show'}
      
    </div>
  );
}



export default App;
