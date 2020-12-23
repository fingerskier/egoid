import React,{useRef} from 'react'
import {put} from "../utilities";

function Add({quest_id}) {
  const name = useRef(null)
  const description = useRef(null)

  function save(event) {
    const payload = {
      name: name.current.value,
      description: description.current.value,
    }

    put('task')
    .then(()=>console.log('saved'))
  }

  return (
    <div>
      Add a Task
      <form onSubmit={save}>
        <input name="name" ref={name} type="text" />
        <textarea name="description" ref={description}></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Add
