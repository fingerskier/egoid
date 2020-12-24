import React,{useEffect,useRef,useState} from 'react'
import './App.css';
import Quests from './Quest/List'
import {get} from './utilities'

function App() {
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

      <Quests parent_id={0} />
      
      <select value={parent} onChange={selectParent}>
        <option value="-1">None</option>
        <option value="0">Top-Level</option>
        {quests.map(el=><option key={el.rowid} val={el.rowid}>{el.name}</option>)}
      </select>
    </div>
  );
}

export default App;