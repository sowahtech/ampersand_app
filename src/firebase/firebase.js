import * as firebase from 'firebase'

import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDUxMGl75V7LtGg4iR1C7-htt6pdOTDUJM",
    authDomain: "ampersandapp-58592.firebaseapp.com",
    projectId: "ampersandapp-58592",
    storageBucket: "ampersandapp-58592.appspot.com",
    messagingSenderId: "596806642903",
    appId: "1:596806642903:web:96f6a8f6d740dcbabfd492"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;