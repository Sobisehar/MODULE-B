// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
        
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5oJFpazZpQnQKfsvXdgvd7XB62V-qMbg",
  authDomain: "database-authentication-c296f.firebaseapp.com",
  projectId: "database-authentication-c296f",
  storageBucket: "database-authentication-c296f.appspot.com",
  messagingSenderId: "397053333629",
  appId: "1:397053333629:web:021c54b9a4c7079b55a114"
};      
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database };
   