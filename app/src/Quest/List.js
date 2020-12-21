import React,{useEffect,useState} from 'react'
import {get} from '../utilities'
import AddQuest from "./Add";
import Quest from "./Quest";

function Quests({parent_id=0}) {
  const [quests, setQuests] = useState([])
  
  useEffect(() => {
    get(`quest/all/${parent_id}`)
    .then(result=>{
      console.log('quests',result)
      setQuests(result)
    })
    
    return () => {
      setQuests([])
    }
  }, [parent_id])
  
  return (
    <div>
      <h1>Quests</h1>
      <p>
        {quests.map(el=><Quest 
          key={el.rowid} 
          id={el.rowid} 
          name={el.name} 
          description={el.description} 
        />)}
      </p>

      {JSON.stringify(quests)}
      
      <AddQuest />
    </div>
  )
}

export default Quests