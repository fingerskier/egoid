import React,{useEffect,useState} from 'react'
import {get} from '../utilities'
import AddTask from "../Task/Add";
import Task from "../Task/Task";

function Tasks({quest_id=0}) {
  const [quest, setQuest] = useState({name:'Top Level'})
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log(quest_id)
    get(`task/${quest_id}`)
    .then(result=>{
      let q = result[0]
      if (!q) q = {name:'Top-Level'}
      setQuest(q)
      console.log('parent',q)
    })
    
    get(`task/all/${quest_id}`)
    .then(result=>setTasks(result))
  }, [quest_id])

  return (
    <div className="tasks">
      Tasks
      <br/>
      <AddTask quest_id={quest_id} />
      {tasks.map(el=><div key={el.rowid}>
        <hr/>
        <Task id={el.rowid} />
      </div>)}
    </div>
  )
}

export default Tasks