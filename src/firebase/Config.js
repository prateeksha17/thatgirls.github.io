import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlValCxvPENh4CZYWuVzmwcWnsnOhUAAc",
  authDomain: "confession-23dca.firebaseapp.com",
  projectId: "confession-23dca",
  storageBucket: "confession-23dca.appspot.com",
  messagingSenderId: "237274823822",
  appId: "1:237274823822:web:68a5a5840c0ab00bd31ddf"
};

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firestore()

  export { projectFirestore }