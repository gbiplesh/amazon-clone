import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiBX8ec5BBihe8lbS--71SB1TgRUCLKkA",
  authDomain: "clone-671df.firebaseapp.com",
  projectId: "clone-671df",
  storageBucket: "clone-671df.appspot.com",
  messagingSenderId: "544996999359",
  appId: "1:544996999359:web:6d58bfd3dca23dc008c60a",
  measurementId: "G-LDS4DF4D9P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };