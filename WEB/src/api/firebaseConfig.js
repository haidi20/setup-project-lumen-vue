import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCsfaEUbMbUmmQabPQbN1OdrSSwVjUqzvI",
    authDomain: "setup-project-lumen-vue.firebaseapp.com",
    projectId: "setup-project-lumen-vue",
    storageBucket: "setup-project-lumen-vue.appspot.com",
    messagingSenderId: "884128352950",
    appId: "1:884128352950:web:8c08b411227c187e413417"
};


// firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebaseApp.database().ref().child('events');