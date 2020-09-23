const { Router } = require('express');
const router = Router();

const { renderNoteForm,
     createNewNote,
      renderNotes,
       renderEditForm, 
       UpdateNote, 
       deletenote }
        = require('../controllers/notes.controller');

        const { isAuthenticated } = require('../helpers/auth');

//new notes
router.get('/notes/add',isAuthenticated , renderNoteForm);

router.post('/notes/new-note',isAuthenticated , createNewNote);


//get all Notes
router.get('/notes',isAuthenticated , renderNotes);


//edit notes
router.get('/notes/edit/:id',isAuthenticated , renderEditForm);

router.put('/notes/edit/:id',isAuthenticated , UpdateNote);


//delete notes
router.delete('/notes/delete/:id',isAuthenticated , deletenote)


module.exports = router;