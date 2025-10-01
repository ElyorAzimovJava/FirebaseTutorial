import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection, onSnapshot,
    getDocs,
    addDoc,
    deleteDoc,
    doc, query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc,

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


// queries
const q = query(colRef, orderBy("createdAt"));
onSnapshot(q , (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({... doc.data(), id: doc.id });

    })
    console.log(books)
})


// get a single document
  const docRef = doc(db, "Book", 'QAe1kNwKNBX6RPe9Lq22')

onSnapshot(docRef,(doc) =>{
    console.log(doc.data(), doc.id)
} )


 // adding documents
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
        createdAt : serverTimestamp()
    })
        .then(()=> {
            addForm.reset()
        })
})


// deleting documents
const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const  docRef = doc(db, "Book", deleteForm.id.value)
    deleteDoc(docRef)
        .then(()=> {
            deleteForm.reset()
        })
})

// updating document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const  docRef = doc(db, "Book", updateForm.id.value)

    updateDoc(docRef, {
        title : 'updated title',
    })
        .then((doc) => {
            updateForm.reset()
        })
})