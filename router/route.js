const express = require('express')
const AddNotesController = require('../controllers/AddNotesController')
const router = express.Router()

router.post('/api/addNotes',AddNotesController.addNotes)
router.get('/api/getAllNotes',AddNotesController.getAllNotes)
router.put('/api/updateNote',AddNotesController.updateNote)
router.delete('/api/deleteNote',AddNotesController.deleteNote)


module.exports = router;