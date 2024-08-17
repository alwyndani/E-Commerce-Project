// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyvcrIkGekNUbrYJceJ6ZXAfG7C3wPn9o",
  authDomain: "zenzest-treasures.firebaseapp.com",
  projectId: "zenzest-treasures",
  storageBucket: "zenzest-treasures.appspot.com",
  messagingSenderId: "706136996172",
  appId: "1:706136996172:web:0bbe72e5135eab6649b7e9",
  measurementId: "G-SYX3HN552F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);