// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, initializeAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD7XmuyKSTubIlPi0eOcz4YO0GuC1wZgSc",
    authDomain: "netflix-clone-d61b5.firebaseapp.com",
    projectId: "netflix-clone-d61b5",
    storageBucket: "netflix-clone-d61b5.appspot.com",
    messagingSenderId: "646911835248",
    appId: "1:646911835248:web:d8c1898562b0736877c8b5"
  };
  
  const firebase_app = firebase.initializeApp(firebaseConfig);
  const database = firebase_app.firestore();
  // const app = initializeAuth(firebase_app);
  const auth = getAuth() ;

  export {auth}
  export default database;