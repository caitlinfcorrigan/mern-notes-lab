import { useEffect, useState } from "react"
import Note from "../../components/Note/Note";
import NewNote from "../../components/NewNote/NewNote";
import * as notesAPI from "../../utilities/notes-api";

export default function NotesPage({user, setUser}) {
    const [notes, setNotes] = useState([]);
    // useEffect to synchronize with DB
    useEffect(function() {
        async function getNotes() {
            const myNotes = await notesAPI.getAll();
            myNotes[0] ?
            setNotes(myNotes)
            :
            setNotes(null)
        }
        getNotes();
    }, []);

    // Need to destructure notes and pass to Note
    console.log(`my notes ${notes[0]}`);

    const myNote = notes.map((n, idx) => (
        <Note note={n.text} time={n.updatedAt} key={'N' + idx} />
    ))
        // <Note note={n} key={'N' + idx} />
        
 
    // const myNote = [<li> Potato </li>,<li> Peas </li>]

    return(
        <div>
            <h1>My Notes</h1>
            <NewNote notes={notes} setNotes={setNotes} />
            <h3>Existing Notes</h3>
            { notes ? 
            <ul>
                {myNote}
            </ul>
            :
            <p>No notes yet</p>
            }
        </div>
    )
}