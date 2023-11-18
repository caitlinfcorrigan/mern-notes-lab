import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";

export default function NewNote({ notes, setNotes }) {
    const [newNote, setNewNote] = useState({text:""});

    function handleTypeNote(e) {
        const newNoteText = { ...newNote, [e.target.name]: e.target.value };
        setNewNote(newNoteText);
    }

    // DB Event Handlers
    async function handleSubmit(e){
        e.preventDefault();
        const doc = await notesAPI.createNote(newNote);
        setNotes([...notes, doc])
        setNewNote({text: ""});
    }

    return (
        <div>
            <h3>New Note</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" value={newNote.text}onChange={handleTypeNote} />
                <button type="submit">Create Note</button>
            </form>
        </div>
    )
}