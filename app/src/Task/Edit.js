import React,{useEffect,useRef,useState} from 'react'
import {get, post,put} from "../utilities";

function Add({id}) {
  const [description, setDescription] = useState('unk')
  const [editable, setEditable] = useState(false)
  const [emotion,setEmotion] = useState(0)
  const [intellect,setIntellect] = useState(0)
  const [name, setName] = useState('loading...')
  const [physique,setPhysique] = useState(0)
  const [rowid, setRowid] = useState(0)
  const [social,setSocial] = useState(0)

  useEffect(() => {
    get(`task/${id}`)
    .then(result=>{
      const q = result[0]

      if (q && (q.rowid === id)) {
        setDescription(q.description)
        setEmotion(q.emotion)
        setIntellect(q.intellect)
        setName(q.name)
        setPhysique(q.physique)
        setSocial(q.social)
      }
    })
  }, [id])

  function save(event) {
    event.preventDefault()
    const payload = {
      name: name,
      description: description,
      emotion: emotion,
      physique: physique,
      social: social,
      intellect: intellect,
    }
    
    post(`task/${id}`, payload)

    toggleEdit()
    return false
  }

  function toggleEdit() {
    setEditable(!editable)
  }

  function Weight({title,name,changer,value}) {
    return <label>
      {title}:&nbsp;
      <input
        name={name}
        onChange={event=>changer(event.target.value)}
        value={value}
        type="range"
        min="0"
        max="3"
        step="1"
      />
    </label>
  }

  return (
    <div>
      <form onSubmit={save}>
        <input 
          name="name"
          placeholder="New Task"
          type="text"
          value={name}
          onChange={event=>setName(event.target.value)}
        />
        <br/>
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={event=>setDescription(event.target.value)}
        ></textarea>
        <br/>
        <label>
          Emotion:&nbsp;
          <input
            name="emotion"
            onChange={event=>setEmotion(event.target.value)}
            value={emotion}
            type="range"
            min="0"
            max="3"
            step="1"
          />
        </label>
        <br/>
        <label>
          Intellect:&nbsp;
          <input
            name="intellect"
            onChange={event=>setIntellect(event.target.value)} value={intellect} type="range"
            min="0"
            max="3"
            step="1"
          />
        </label>
        <br/>
        <label>
          Physique:&nbsp;
          <input
            name="physique"
            onChange={event=>setPhysique(event.target.value)} value={physique} type="range"
            min="0"
            max="3"
            step="1"
          />
        </label>
        <br/>
        <label>
          Social:&nbsp;
          <input
            name="social"
            onChange={event=>setSocial(event.target.value)} value={social} type="range"
            min="0"
            max="3"
            step="1"
          />
        </label>
        <br/>

        <br/>
        <button>Update Task</button>
      </form>
    </div>
  )
}

export default Add