require('dotenv').config()
const express = require('express');
const path = require('path')
const sqlite = require('sqlite3')

const router = express.Router();

const dbpath = path.normalize(process.env.DB_PATH)
const dbfile = path.join(dbpath, 'egoid.db')
const db = new sqlite.Database(dbfile)


router.get('/', async(req, res, next)=>{
  res.render('data', { title: 'Egoid Data' }); 
});


module.exports = router