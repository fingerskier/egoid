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
      <h2>Add Quest</h2>
      <form>
        <input ref={name} placeholder="New Quest" />
        <br/>
        <textarea ref={description} placeholder="Description"></textarea>
        <br/>
        <button onClick={save}>Save</button>
      </form>
    </div>
  )
}

export default Add