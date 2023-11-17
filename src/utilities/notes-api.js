// sendRequest default method is GET
import sendRequest from "./send-request";

const BASE_URL = '/api/notes'

// Retrieve the user's notes
export function getAll() {
    return sendRequest(BASE_URL);
}

export function createNote() {
    return sendRequest(BASE_URL, 'POST');
}