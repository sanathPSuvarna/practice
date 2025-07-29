import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';

function App()
{
  const [value,setValue]= useState('')
  const [task,setTask]= useState([])
  const [count,setcount]= useState(0);
  

  const onInputChange=(e)=>{
    setValue(e.target.value);
  }

  const onAddTask=()=>{
    if(value.trim()!==''){
    var Task=[...task,{id:uuid(),name:value,iscompleted:false}]
    setTask(Task);
    setValue('')
    setcount(count+1);
    }
    else{
      alert('Enter a valid Task');
    }
    
  }
  const onTaskDelete=(id)=>{
      const TASKS=task.filter(item=>item.id!==id);
      setTask(TASKS);
      setcount(count-1);
  }
  const onCheck=(id)=>{
    const tasks=task.map((item)=>item.id===id?{...item,iscompleted:!item.iscompleted}:item)
    setTask(tasks);
  }

  return(
    <div className='body'>
      <h1>To Do List</h1>
      <div>
        <input value={value} onChange={onInputChange} type="text" placeholder="Enter a task"></input>
        
        <button onClick={onAddTask}>Add task</button>
      </div>
      <div>
        <ul>
         {task.map(item=>(
          <li key={item.id}>
            <input onChange={()=>onCheck(item.id)} type="checkbox"></input>
            <span style={{textDecoration:item.iscompleted?'line-through':''}}>{item.name}</span>
            <button id='delete' onClick={()=>onTaskDelete(item.id)}>Delete</button>
          </li>
         )
         )}
        </ul>
        <span>{count} Tasks</span>
      </div>
    </div>
  )
}

export default App;