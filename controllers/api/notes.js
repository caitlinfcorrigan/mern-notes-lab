const Note = require('../../models/note');

module.exports = {
    index,
    createNote
}

async function createNote(req,res) {
    // console.log(req)
    console.log(req.body);
    const newNote = await new Note({text: req.body.text, user: req.user._id});
    await newNote.save();
    res.json(newNote)
}

async function index(req, res) {
    const notes = await Note.find({user: req.user._id});  
    try {
        res.json(notes)
    } catch {
        console.log(`Failed to retrieve user's notes`)
    }
}