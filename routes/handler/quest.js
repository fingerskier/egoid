require('dotenv').config()
const debug = require('debug')('egoid:quest');
const path = require('path')
const sqlite = require('sqlite3')

const dbpath = path.normalize(process.env.DB_PATH)
const dbfile = path.join(dbpath, 'egoid.db')
const db = new sqlite.Database(dbfile)

module.exports = {
  create: async(req, res, next)=>{
    const {parent_id,name,description} = req.body
    
    const sql = `insert into quests(parent_id,name,description) values(?,?,?)`
    const parameters = [parent_id,name,description]

    debug('quest:create', sql, parameters)
    db.all(sql, parameters, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
  
  delete: async(req, res, next)=>{
    const {id} = req.params
    const {name,description} = req.body
    
    const sql = `delete from quests where rowid = ?`
    
    const parameters = [name,description,id]
    
    db.all(sql, parameters, parent, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },

  main: async(req,res,next)=>{
    res.json({quest:'all'})
  },
  
  read: async(req, res, next)=>{
    const {id} = req.params

    debug(`quest:read`)
    
    db.all('select rowid,* from quests where rowid=?', [id], (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
  
  readChildren: async(req, res, next)=>{
    const {parent_id} = req.params || 0
    
    debug('quest:readChildren', parent_id)

    const sql = 'select rowid,* from quests where parent_id=?'
    const parameters = [parent_id]
    debug('quest:readChildren',sql,parameters)
    
    db.all(sql, parameters, (err,result)=>{
      if (err) debug(err)
      debug('quest:readChildren',result)
      res.json(result)
    })
  },
  
  readParents: async(req, res, next)=>{
    debug('quest:readParents')
    const {parent_id} = req.params || 0
    
    const sql = `select * from quests where rowid in ( select distinct parent_id from quests )`
    const parameters = [parent_id]
    debug('quest:readAll',sql,parameters)
    
    db.all(sql, parameters, (err,result)=>{
      if (err) debug(err)
      debug('quest:readParents',result)
      res.json(result)
    })
  },
  
  update: async(req, res, next)=>{
    const {id} = req.params
    const {name,description} = req.body
    
    const sql = `update quests set name = ?, description = ? where rowid = ?`
    
    const parameters = [name,description,id]
    
    db.all(sql, parameters, (err,result)=>{
      if (err) console.error(err)
      res.json(result)
    })
  },
}