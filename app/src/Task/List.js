import React,{useEffect,useState} from 'react'
import {get} from '../utilities'
import AddTask from "../Task/Add";

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
    <div>
      <h1>{quest.name}</h1>
      <br/>
      {tasks.map(el=><div key={el.rowid}>
        <hr/>
        <Tasks
          parent_id={el.rowid}
          name={el.name}
        />
        
        <AddTask parent_id={el.rowid} />
      </div>)}
    </div>
  )
}

export default Tasks