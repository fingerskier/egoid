import React,{useRef,useState} from 'react'
import {put} from "../utilities";

function Add({quest_id}) {
  const name = useRef(null)
  const [emotion,setEmotion] = useState(0)
  const [intellect,setIntellect] = useState(0)
  const [physique,setPhysique] = useState(0)
  const [social,setSocial] = useState(0)
  const description = useRef(null)

  function save(event) {
    const payload = {
      name: name.current.value,
      description: description.current.value,
    }
    
    put('task', payload)
    .then(()=>console.log('saved'))
  }

  return (
    <div>
      Add a Task
      <form onSubmit={save}>
        <input name="name" placeholder="New Task" ref={name} type="text" />
        <br/>
        <textarea name="description" placeholder="Description" ref={description}></textarea>
        <br/>
        <label>
          Emotion:&nbsp;
          <input name="emotion" onChange={event=>setEmotion(event.target.value)} value={emotion} type="range" min="0" max="3" step="1" />
        </label>
        <br/>
        <label>
          Intellect:&nbsp;
          <input name="intellect" onChange={event=>setIntellect(event.target.value)} value={intellect} type="range" min="0" max="3" step="1" />
        </label>
        <br/>
        <label>
          Physique:&nbsp;
          <input name="physique" onChange={event=>setPhysique(event.target.value)} value={physique} type="range" min="0" max="3" step="1" />
        </label>
        <br/>
        <label>
          Social:&nbsp;
          <input name="social" onChange={event=>setSocial(event.target.value)} value={social} type="range" min="0" max="3" step="1" />
        </label>
        <br/>

        <br/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default Add
