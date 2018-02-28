import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "[key]",
    authDomain: "[app domain].firebaseapp.com",
    databaseURL: "[db url].firebaseio.com",
    projectId: "[project id]",
    storageBucket: "[bucket].appspot.com",
    messagingSenderId: "[sender id]"
  });

// The above key can be obtained from your fire base console!

export const db = app.database();
export const auth = app.auth();