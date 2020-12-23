import React,{useEffect,useState} from 'react'
import {get} from '../utilities'
import AddTask from "../Task/Add";

function Quests({parent_id=0,selection}) {
  const [parent, setParent] = useState({})
  const [quests, setQuests] = useState([])
  
  const [sel, setSel] = selection

  useEffect(() => {
    console.log(parent_id)
    get(`quest/${parent_id}`)
    .then(result=>{
      if (!result.length) result = {name:'Top-Level'}
      setParent(result)
    })
    
    get(`quest/all/${parent_id}`)
    .then(result=>setQuests(result))
    
    return () => {
      setQuests([])
    }
  }, [parent_id])

  function Quest({rowid,name,description}) {
    function click(event) {
      setSel(rowid)
      console.log('selection',selection)
    }

    return <>
      <a 
        onClick={click} 
      >{name}</a>
      <br/>
    </>
  }
  
  return (
    <div>
      <h1>{parent.name}</h1>
      <h2>Quests</h2>

      <br/>
      {quests.map(el=><Quest 
        key={el.rowid}
        rowid={el.rowid}
        name={el.name}
      />)}

      {JSON.stringify(quests)}

      <AddTask quest_id={parent_id} />
    </div>
  )
}

export default Quests