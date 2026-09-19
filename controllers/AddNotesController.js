const usersNotes = require('../models/AddNotesModel')

exports.addNotes = async(req,res)=>{


    try {

     const {NoteTitle,Category,Note,Tags}=req.body

     const shareNote = new usersNotes({NoteTitle,Category,Note,Tags})

     await shareNote.save()

     res.status(201).json(shareNote)

        
    } catch (error) {
        res.status(400).json({message:'error in addNotes',error:error.message})
    }
    
}

exports.getAllNotes = async(req,res)=>{

    try {
        const getNotes = await usersNotes.find()
        res.status(200).json(getNotes)
    } catch (error) {
        res.status(500).json({message:"error in get all notes",error:error.message})
    }
}

exports.updateNote = async(req,res)=>{

    try {
        const {NoteTitle,Category,Note,Tags,id}=req.body

        const update = await usersNotes.findByIdAndUpdate(id,{NoteTitle,Category,Note,Tags}, { new: true })
       
        
        res.status(201).json(update)
        
    } catch (error) {
        res.status(500).json({message:'error in updateNote',error:error.message})
    }

}

exports.deleteNote = async(req,res)=>{

    try {
        const {id}=req.body
        const deleNote = await usersNotes.findByIdAndDelete(id)
        res.status(200).json({message:'successfully delted Note',deleNote})
    } catch (error) {
        res.status(500).json({message:'error in delete Note ',error:error.message})
    }
}