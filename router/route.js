const express = require('express')
const AddNotesController = require('../controllers/AddNotesController')
const router = express.Router()

router.post('/api/addNotes',AddNotesController.addNotes)

module.exports = router;