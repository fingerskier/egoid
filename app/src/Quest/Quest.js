import React,{useEffect,useRef,useState} from 'react'
import { get,post } from '../utilities'
import AddTask from "../Task/Add";

function Quest({id}) {
  const [editable, setEditable] = useState(false)
  const [rowid, setRowid] = useState(-7)
  const [name, setName] = useState('loading...')
  const [description, setDescription] = useState('loading...')
  
  useEffect(() => {
    get(`quest/${id}`)
    .then(result=>{
      const q = result[0]
      setRowid(q.rowid)
      setName(q.name)
      setDescription(q.description)
    })
  }, [id])

  function edit() {
    setEditable(!editable)
  }

  function save() {
    post(`quest/${id}`, {
      name: name,
      description: description,
    })
  }
  
  return (
    <div>
      {name}&nbsp;
      <a onClick={edit}>edit</a>

      <form 
        className={`${editable?'0':'invisible'}`}
        onSubmit={save}
      >
        <input
          name="rowid"
          type="hidden"
          value={rowid} 
        />
        <br/>
        <input
          name="name"
          type="text"
          value={name}
          onChange={event=>setName(event.target.value)}
        />
        <br/>
        <textarea
          name="description"
          type="text"
          value={description}
          onChange={event=>setDescription(event.target.value)}
        ></textarea>
        <br/>
        <button>Save Quest</button>
      </form>

      <AddTask quest_id={id} />
    </div>
  )
}

export default Quest