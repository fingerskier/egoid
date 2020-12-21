const express = require('express');

const router = express.Router();

const quest = require('./handler/quest')


router.get('/', quest.main)
router.put('/', quest.create)
router.get('/:id', quest.read)
router.post('/:id', quest.update)

router.get('/all', quest.readAll)
router.get('/all/:parent_id', quest.readAll)


module.exports = router