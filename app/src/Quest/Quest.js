import React,{useEffect,useState} from 'react'
import { get } from '../utilities'

function Quest({id,name,description}) {
  const [quest, setQuest] = useState(null)

  useEffect(() => {
    get(`quest/${id}`)
    .then(result=>setQuest(result))
    
    return () => {
      setQuest(null)
    }
  }, [])

  return (
    <div>
      {id}
      {name}
      {description}
    </div>
  )
}

export default Quest