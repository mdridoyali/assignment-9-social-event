// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyDdcnZ7aOJwsGqHSz_6PHQACr28zaw2M8c",
  authDomain: "assignment-9-social-events.firebaseapp.com",
  projectId: "assignment-9-social-events",
  storageBucket: "assignment-9-social-events.appspot.com",
  messagingSenderId: "558753632513",
  appId: "1:558753632513:web:0a9cef14b376881bc20b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)

 