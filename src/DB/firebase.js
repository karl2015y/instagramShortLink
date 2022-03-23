// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDYvCe6jv3m8m1Uf_glACTC29yxyQkf0",
  authDomain: "instagramshortlink.firebaseapp.com",
  projectId: "instagramshortlink",
  storageBucket: "instagramshortlink.appspot.com",
  messagingSenderId: "65643406445",
  appId: "1:65643406445:web:8b8fa1f4d7e4ac76ec8b64",
  measurementId: "G-8KL3HTM63Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);