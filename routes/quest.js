const express = require('express');

const router = express.Router();

const quest = require('./handler/quest')



router.get('/all/:parent_id', quest.readChildren)
router.get('/parents', quest.readParents)

router.get('/:id', quest.read)
router.post('/:id', quest.update)

router.get('/', quest.main)
router.put('/', quest.create)


module.exports = router