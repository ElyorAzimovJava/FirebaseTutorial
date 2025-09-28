import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs

} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyApPmLr9n7G5PgeRFSzAi5bVOUW-srvrrs",
    authDomain: "first-firebase-project-c08b4.firebaseapp.com",
    projectId: "first-firebase-project-c08b4",
    storageBucket: "first-firebase-project-c08b4.firebasestorage.app",
    messagingSenderId: "943477677339",
    appId: "1:943477677339:web:533faa67df9d6c1ead47be",
    measurementId: "G-G210W4RLXC"
};
initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db, "Book")

getDocs(colRef)
.then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({... doc.data(), id: doc.id });

    })
    console.log(books)
})
