import firebase from "firebase"

let firebaseLog = {
    apiKey: "AIzaSyDsYnXdMzRswkCDHzX4-rW-F2naUPhfpUc",
    authDomain: "login-9c0ed.firebaseapp.com",
    databaseURL: "https://login-9c0ed-default-rtdb.firebaseio.com",
    projectId: "login-9c0ed",
    storageBucket: "login-9c0ed.appspot.com",
    messagingSenderId: "363518216164",
    appId: "1:363518216164:web:b2fafdc51d249dbe1329f1"
};

const fire = firebase.initializeApp(firebaseLog);
export default fire