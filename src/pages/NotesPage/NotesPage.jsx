import { useEffect, useState } from "react"
import Note from "../../components/Note/Note";
import * as notesAPI from "../../utilities/notes-api";

export default function NotesPage({user, setUser}) {
    const [notes, setNotes] = useState(null);
    // useEffect to synchronize with DB?
    useEffect(function() {
        async function getNotes() {
            const notes = await notesAPI.getAll();
            notes[0] ?
            setNotes(notes)
            :
            setNotes(null)
        }
        getNotes();
    }, []);


    console.log(`mine ${notes}`);

    return(
        <div>
            <h1>My Notes</h1>
            { notes ? 
            <ul>
                <Note />
            </ul>
            :
            <p>No notes yet</p>
            }
        </div>
    )
}