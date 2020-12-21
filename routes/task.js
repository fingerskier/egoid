const express = require('express');

const router = express.Router();


const task = require('./handler/task')


router.get('/tasks', task.readAll);

router.get('/task/:id', task.read)

router.post('/task/:id', task.update)

router.put('/task', task.create)

module.exports = router