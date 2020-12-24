const express = require('express');

const router = express.Router();

const quest = require('./handler/quest')



router.get('/all/:parent_id', quest.readChildren)
router.get('/parents', quest.readParents)

router.get('/:id', quest.read)
router.post('/:id', quest.update)

router.put('/', quest.create)
router.get('/', quest.main)


module.exports = router