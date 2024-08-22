import {collection,  addDoc } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import { db } from '../firebase-config.js';

export const addToPlaylist =async (song)=>{
    const docRef = await addDoc(collection(db, "playlist"), {
        song
       });
       console.log("Document written with ID: ", docRef.id);
}
// Add a new document with a generated id.
