import React,{useEffect,useState} from 'react'
import {get} from '../utilities'
import AddQuest from "./Add";
import AddTask from "../Task/Add";

function Quests({parent_id=0}) {
  const [parent, setParent] = useState({name:'Top Level'})
  const [quests, setQuests] = useState([])
  
  useEffect(() => {
    console.log(parent_id)
    get(`quest/${parent_id}`)
    .then(result=>{
      let q = result[0]
      if (!q) q = {name:'Top-Level'}
      setParent(q)
      console.log('parent',q)
    })
    
    get(`quest/all/${parent_id}`)
    .then(result=>setQuests(result))
  }, [parent_id])
  
  return (
    <div className="list">
      <h1>{parent.name}</h1>
      <br/>
      {quests.map(el=><div key={el.rowid}>
        <hr/>
        <Quests 
          parent_id={el.rowid}
          name={el.name}
        />

        <AddQuest parent_id={el.rowid} />

        <AddTask quest_id={el.rowid} />
      </div>)}
    </div>
  )
}

export default Quests