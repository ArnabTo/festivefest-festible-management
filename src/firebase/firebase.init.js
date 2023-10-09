// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvZfXS3P431_uxuESTIRC3ZnEQ_mlKUY",
  authDomain: "event-management-project-1416b.firebaseapp.com",
  projectId: "event-management-project-1416b",
  storageBucket: "event-management-project-1416b.appspot.com",
  messagingSenderId: "154931639846",
  appId: "1:154931639846:web:567297ad16abff378ad8e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;