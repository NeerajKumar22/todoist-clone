import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBs0LJCHwUlramo_2GWJpPcDmO80O48kA8",
    authDomain: "todoist-clone-e613c.firebaseapp.com",
    databaseURL: "https://todoist-clone-e613c.firebaseio.com",
    projectId: "todoist-clone-e613c",
    storageBucket: "todoist-clone-e613c.appspot.com",
    messagingSenderId: "706944224280",
    appId: "1:706944224280:web:a27408595ebe890eb4876d"
});

export { firebaseConfig as firebase }