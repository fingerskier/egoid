import React,{useEffect,useRef,useState} from 'react'
import {put} from '../utilities'

function Add({parent_id=0}) {
  const description = useRef(null)
  const name = useRef(null)
  
  const [editable, setEditable] = useState(false)

  const title = parent_id ? 'Add Sub-Quest' : 'Add Quest Line'
  
  function save(event) {
    event.preventDefault()
    
    const data = {
      description: description.current.value,
      name: name.current.value,
      parent_id: parent_id,
    }
    
    put('quest', data)
    
    return false
  }
  
  function toggleEdit() {
    setEditable(!editable)
  }

  return (
    <div>
      <form onSubmit={save}>
        <h2 onClick={toggleEdit}>{title}</h2>

        <fieldset className={`${editable?'0':'invisible'}`}>
          <input ref={name} placeholder="New Quest" />
          <br/>
          <textarea ref={description} placeholder="Description"></textarea>
          <br/>
          <button>Save</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Add