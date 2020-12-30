import React,{useEffect,useState} from 'react'
import { get } from '../utilities'
import Editor from "./Edit";

function Task({id}) {
  const [description, setDescription] = useState('unk')
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState('loading...')

  useEffect(() => {
    get(`task/${id}`)
    .then(result=>{
      const q = result[0]

      if (q) {
        setDescription(q.description)
        setName(q.name)
      }
    })
  }, [id])
  
  function toggleEdit() {
    setEditable(!editable)
  }

  return (
    <div className="task">
      <h3 onClick={toggleEdit}>{name}</h3>
      {editable
        ?<Editor id={id} />

        :<></>
      }
    </div>
  )
}

export default Task
