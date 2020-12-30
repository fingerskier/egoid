require('dotenv').config()
const debug = require('debug')('egoid:tasks');
const path = require('path')
const sqlite = require('sqlite3')

const dbpath = path.normalize(process.env.DB_PATH)
const dbfile = path.join(dbpath, 'egoid.db')
const db = new sqlite.Database(dbfile)

module.exports = {
  create: async(req,res,next)=>{
    try {
      debug('task create')
      
      const {quest_id,name,description} = req.body
      
      const sql = `insert into tasks(quest_id,name,description) values(?,?,?)`
      const parameters = [quest_id,name,description]
      
      debug(parameters)
      
      db.all(sql, parameters, (err,result)=>{
        if (err) console.error(err)
        
        res.json(result)
      })
    } catch (error) {
      console.error(error)
    }
  },
  
  delete: async(req, res, next)=>{
    const {id} = req.params
    const {name,description} = req.body
    
    const sql = `delete from tasks where rowid = ?`
    
    const parameters = [name,description,id]
    
    db.all(sql, parameters, parent, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
  
  read: async(req,res,next)=>{
    const {id} = req.params
  
    db.all(`select rowid,* from tasks where rowid=${id}`, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
  
  readAll: async(req, res, next)=>{
    const {quest_id} = req.params
    const sql = 'select rowid,* from tasks where quest_id=?'

    const parameters = [quest_id]

    db.all(sql, parameters, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
  
  update: async(req,res,next)=>{
    const {id} = req.params
    const data = req.body

    let parameters = []
    let setters = []

    for (let key in data) {
      setters.push(`${key} = ?`)
      parameters.push(data[key])
    }
    
    setters = setters.join(',')
    const sql = `update tasks set ` + setters + ` where rowid = ${id}`

    debug(sql)
    
    db.all(sql, parameters, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
}