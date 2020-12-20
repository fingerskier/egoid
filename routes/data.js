const express = require('express');
const path = require('path')
const sqlite = require('sqlite3')

const router = express.Router();

const dbpath = path.normalize('C:/Dropbox/My Documents/fingerskier')
const dbfile = path.join(dbpath, 'egoid.db')
const db = new sqlite.Database(dbfile)


router.get('/', async(req, res, next)=>{
  res.render('data.html', { title: 'Egoid Data' }); 
});

router.get('/tasks', async(req, res, next)=>{
  db.all('select rowid,* from tasks', (err,result)=>{
    if (err) console.error(err)
    res.json(result)
  })
});

router.get('/task/:id', async(req,res,next)=>{
  const {id} = req.params

  db.all(`select * from tasks where rowid=${id}`, (err,result)=>{
    if (err) console.error(err)
    res.json(result)
  })
})

router.post('/task', async(req,res,next)=>{
  const {data} = req.body

  db.all(`select * from tasks where rowid=${id}`, (err,result)=>{
    if (err) console.error(err)
    res.json(result)
  })
})

module.exports = router