import React,{useEffect,useRef,useState} from 'react'
import './App.css';
import Quests from './Quest/List'
import {get} from './utilities'

function App() {
  const parentSelect = useRef(null)
  const [parent, setParent] = useState(0)
  const [quests, setQuests] = useState([])

  useEffect(() => {
    get(`quest/all/${parent}`)
    .then(result=>{
      console.log('quests',result)
      setQuests(result)
    })
    
    return () => {
      setQuests([])
    }
  }, [parent])

  function selectParent(event) {
    setParent(parentSelect.current.value)
  }

  return (
    <div>
      <h1>Egoid</h1>

      <select onSelect={selectParent} ref={parentSelect}>
        <option val="-1">None</option>
        <option val="0">Top-Level</option>
        {quests.map(el=><option key={el.rowid} val={el.rowid}>{el.name}</option>)}
      </select>
      Parent: {parent}
      {JSON.stringify(quests)}
      <Quests parent_id={parent} />
      <h2>Quests</h2>
      <select></select>
      <h2>Tasks</h2>
      <select></select>
    </div>
  );
}

export default App;