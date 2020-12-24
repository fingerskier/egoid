require('dotenv').config()
const path = require('path')
const sqlite = require('sqlite3')

const dbpath = path.normalize(process.env.DB_PATH)
const dbfile = path.join(dbpath, 'egoid.db')

const db = new sqlite.Database(dbfile)

db.serialize(()=>{
  db.all('select * from tasks', (err,row)=>{
    if (err) console.error(err)
    console.log('row',row)
  })
})
