import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUlUutxR0Mz6cwkfX-RYarRXc2ZUtDhOI",
  authDomain: "notebook-b7113.firebaseapp.com",
  projectId: "notebook-b7113",
  storageBucket: "notebook-b7113.appspot.com",
  messagingSenderId: "117401839389",
  appId: "1:117401839389:web:94f6be73a99c7bd016a3f4",
};

const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };
