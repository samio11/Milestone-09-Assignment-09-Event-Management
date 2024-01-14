// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbToL05hxvbUxdnnTmY-NAQOEmcdSQoy4",
  authDomain: "assignment-09-game-event.firebaseapp.com",
  projectId: "assignment-09-game-event",
  storageBucket: "assignment-09-game-event.appspot.com",
  messagingSenderId: "690150129734",
  appId: "1:690150129734:web:f98ebbcc67645742dcca47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;