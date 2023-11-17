import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";

export default function NewNote({ setNotes }) {
    const [newNote, setNewNote] = useState({text:""});

    function handleTypeNote(e) {
        const newNoteText = { ...newNote, [e.target.name]: e.target.value };
        setNewNote(newNoteText);
    }

    // DB Event Handlers
    async function handleSubmit(e){
        e.preventDefault();
        console.log(newNote)
        await notesAPI.createNote(newNote);
        // setNotes(...notesAPI, newNote)
        setNewNote("");
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