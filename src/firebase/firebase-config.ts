import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2CG0vFQFLDC9rrTR4XmtJPyWdeksobZ4",
  authDomain: "quote-generator-8312a.firebaseapp.com",
  projectId: "quote-generator-8312a",
  storageBucket: "quote-generator-8312a.appspot.com",
  messagingSenderId: "487805562087",
  appId: "1:487805562087:web:6184e40e4f901131d4c642",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 10:20
