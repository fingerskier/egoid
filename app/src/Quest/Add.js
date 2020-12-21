import React,{useEffect,useRef} from 'react'
import {put} from '../utilities'

function Add() {
  const description = useRef(null)
  const name = useRef(null)
  
  function save(event) {
    const data = {
      name: name.current.value,
      description: description.current.value,
    }
    
    put('data/quest', data)
  }
  
  return (
    <div>
      <h2>Add Game</h2>
      <form>
        <label>
          Name
          <input ref={name} placeholder="New Quest" />
        </label>
        <textarea ref={description} placeholder="Description"></textarea>
        <button onClick={save}>Save</button>
      </form>
    </div>
  )
}

export default Add