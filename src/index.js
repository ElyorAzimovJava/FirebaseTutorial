import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection, onSnapshot,
    getDocs,
    addDoc,
    deleteDoc,
    doc

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

onSnapshot(colRef , (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({... doc.data(), id: doc.id });

    })
    console.log(books)
})

 const addForm = document.querySelector(".add");

    addForm.addEventListener("submit", (e) => {
    e.preventDefault();
        const titleValue = addForm.title.value;
        const authorValue = addForm.author.value;

        console.log(titleValue);
        console.log(authorValue);
    addDoc(colRef, {
        title : titleValue,
        author : authorValue,
    })
        .then(()=> {
            addForm.reset()
        })
})

const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const  docRef = doc(db, "Book", deleteForm.id.value)
    deleteDoc(docRef)
        .then(()=> {
            deleteForm.reset()
        })
})