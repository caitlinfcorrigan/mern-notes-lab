const Notes = require('../../models/note');

module.exports = {
    index
}



async function index(req, res) {
    const notes = await Notes.find({user: req.user._id});  
    try {
        console.log(req.user._id)
        console.log(notes.length)
        // if (notes.length === 0) {notes = null}
        // console.log(`null notes ${notes}`)
        res.json(notes)
    } catch {
        console.log('catch')


    }
}