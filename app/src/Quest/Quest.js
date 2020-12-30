import React,{useEffect,useRef,useState} from 'react'
import { get,post } from '../utilities'
import AddTask from "../Task/Add";
import Children from "./Children";
import Tasks from "../Task/List";

function Quest({id}) {
  const [children, setChildren] = useState([])
  const [description, setDescription] = useState('loading...')
  const [editable, setEditable] = useState(false)
  const [rowid, setRowid] = useState(-7)
  const [name, setName] = useState('loading...')
  
  useEffect(() => {
    get(`quest/${id}`)
    .then(result=>{
      const q = result[0]
      console.log(`quest/${id}`,q)
      if (q) {
        setRowid(q.rowid)
        setName(q.name)
        setDescription(q.description)
      }
    })
  }, [id])

  function toggleEdit() {
    setEditable(!editable)
  }

  function save(event) {
    event.preventDefault()
    post(`quest/${id}`, {
      name: name,
      description: description,
    })
    toggleEdit()
    return false
  }
  
  return (
    <div className="quest">
      <form onSubmit={save}>
        <h1 onClick={toggleEdit}>{name}, {id}</h1>
        <fieldset className={`${editable?'0':'invisible'}`}>
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
        </fieldset>
      </form>

      {editable
        ? <div>
          <Children id={id} />
          <Tasks quest_id={id} />
        </div>
        : <></>
      }
    </div>
  )
}

export default Quest