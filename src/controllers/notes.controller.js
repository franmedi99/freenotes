const notesCtrl = {};
const Note = require('../models/note');

notesCtrl.renderNoteForm = (req,res) =>{
    res.render('notes/new-note');
};

notesCtrl.createNewNote= async (req,res) =>{
    const{title, description} = req.body
    const newNote =   new Note({
        title,
        description
    })
    newNote.user= req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota Agregada Satisfactoriamente');
    res.redirect('/notes');
};

notesCtrl.renderNotes= async(req,res) =>{
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/allnotes',{notes});
};

notesCtrl.renderEditForm=async (req,res) =>{
    const note = await Note.findById(req.params.id);
    if(note.user != req.user.id){
        req.flash('error_msg','No estas autorizado a esa seccion')
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', {note});
};

notesCtrl.UpdateNote=async (req,res) =>{
    const note = await Note.findById(req.params.id);
    const {title, description} =req.body;
    if(note.user != req.user.id){
        req.flash('error_msg','No estas autorizado a esa seccion')
        return res.redirect('/notes');
    }
   await Note.findByIdAndUpdate(req.params.id, {title, description});
   req.flash('success_msg', 'Nota editada Satisfactoriamente');
    res.redirect('/notes');
};

notesCtrl.deletenote =async (req, res) =>{
    const note = await Note.findById(req.params.id);
    if(note.user != req.user.id){
        req.flash('error_msg','No estas autorizado a esa seccion')
        return res.redirect('/notes');
    }

   await Note.findByIdAndDelete(req.params.id);
   req.flash('success_msg', 'Nota eliminada Satisfactoriamente');
    res.redirect('/notes');
};

module.exports = notesCtrl;