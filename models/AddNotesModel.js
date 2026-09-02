const mongoose = require('mongoose')

const addNotesSchema = new mongoose.Schema({
    NoteTitle:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Note:{
        type:String,
        required:true
    },
    Tags:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('UsersNotes',addNotesSchema)