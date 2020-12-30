const express = require('express');

const router = express.Router();


const task = require('./handler/task')


router.get('/all/:quest_id', task.readAll);

router.put('/', task.create)

router.get('/:id', task.read)

router.post('/:id', task.update)


module.exports = router