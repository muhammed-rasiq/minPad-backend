const usersNotes = require('../models/AddNotesModel')

exports.addNotes = async(req,res)=>{


    try {

     const {NoteTitle,Category,Note,Tags}=req.body

     const shareNote = await usersNotes({NoteTitle,Category,Note,Tags})

     await shareNote.save()

     res.status()

        
    } catch (error) {
        
    }
    
}