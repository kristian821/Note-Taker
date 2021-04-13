const { notes } = require('../../db/db.json');
const { validateNote, createNewNote, deleteNote } = require('../../lib/notes');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    // send list of notes
    res.json(notes);
});

router.post('/notes', (req, res) => {

    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(404).send("The note is formatted incorrectly");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {

    const result = deleteNote(req.params.id, notes);
   if (result) {
       res.json(result);
   } else {
       res.send(404);
   }
})

module.exports = router;