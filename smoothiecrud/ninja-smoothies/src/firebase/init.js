import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var firebaseConfig = {
    apiKey: "AIzaSyAI344Rmv3f3YyqsKOAyafUOMeQBFbqY3k",
    authDomain: "vue-crud-d9d25.firebaseapp.com",
    projectId: "vue-crud-d9d25",
    storageBucket: "vue-crud-d9d25.appspot.com",
    messagingSenderId: "877609934853",
    appId: "1:877609934853:web:f25702ca7a41c18a0a3c6c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  

  // export firestore database

  export default firebaseApp.firestore()