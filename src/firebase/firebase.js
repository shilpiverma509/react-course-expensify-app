import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDxHut_iY373x_6Z6Z4GroWGUa6oF2CLyQ",
    authDomain: "expensify-2-83529.firebaseapp.com",
    databaseURL: "https://expensify-2-83529.firebaseio.com",
    projectId: "expensify-2-83529",
    storageBucket: "",
    messagingSenderId: "73239760249"
  };
  firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };