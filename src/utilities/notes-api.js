// sendRequest default method is GET
import sendRequest from "./send-request";

const BASE_URL = '/api/notes'

// Retrieve the user's notes
export function getAll() {
    return sendRequest(BASE_URL);
}

// To create the node, pass in the newNote state as a parameter
export function createNote(newNote) {
    // pass newNote as the payload
    return sendRequest(BASE_URL,'POST', newNote);
}