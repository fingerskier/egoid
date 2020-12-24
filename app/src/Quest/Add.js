import React,{useEffect,useRef} from 'react'
import {put} from '../utilities'

function Add({parent_id=0}) {
  const description = useRef(null)
  const name = useRef(null)

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
  
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={save}>
        <input ref={name} placeholder="New Quest" />
        <br/>
        <textarea ref={description} placeholder="Description"></textarea>
        <br/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Add