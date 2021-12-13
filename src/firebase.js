import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASTJul_2hNktLJySi6cw0WOKfldf9ZpbA",
    authDomain: "insta-clone-73362.firebaseapp.com",
    projectId: "insta-clone-73362",
    storageBucket: "insta-clone-73362.appspot.com",
    messagingSenderId: "525393856290",
    appId: "1:525393856290:web:6065ce10ba67fdfeb1477b",
    measurementId: "G-GP8PKPZJ9P"
  };

 
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage =firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,storage,provider};

  export default db;