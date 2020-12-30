import React,{useEffect,useState} from 'react'
import {get} from "../utilities";
import Quest from "./Quest";
import AddQuest from "./Add";

function Children({id}) {
  const [quests, setQuests] = useState([])
    
  useEffect(() => {
    get(`quest/all/${id}`)
    .then(result=>{
      setQuests(result)
    })
  }, [id])

  return (
    <div className="children">
      <AddQuest parent_id={id} />
      {quests.map(el=><div key={el.rowid}>
        <h3></h3>
        <Quest
          id={el.rowid}
          name={el.name}
        />
      </div>)}      
    </div>
  )
}

export default Children