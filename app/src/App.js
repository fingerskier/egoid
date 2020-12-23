import React,{useEffect,useRef,useState} from 'react'
import './App.css';
import Quests from './Quest/List'
import {get} from './utilities'
import AddQuest from "./Quest/Add";

function App() {
  const parentSelect = useRef(null)
  const [parent, setParent] = useState(0)
  const [quests, setQuests] = useState([])
  const selection = useState(0)

  useEffect(() => {
    get(`quest/parents`)
    .then(result=>{
      console.log('quests',result)
      setQuests(result)
    })
    
    return () => {
      setQuests([])
    }
  }, [parent])

  function selectParent(event) {
    setParent(+event.target.value)
  }

  return (
    <div>
      <h1>Egoid</h1>

      <select value={parent} onChange={selectParent}>
        <option value="-1">None</option>
        <option value="0">Top-Level</option>
        {quests.map(el=><option key={el.rowid} val={el.rowid}>{el.name}</option>)}
      </select>

      <AddQuest />
      Selection: {selection}

      <Quests parent_id={parent} 
        selection={selection}
      />
    </div>
  );
}

export default App;