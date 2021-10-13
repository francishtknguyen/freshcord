import firebase from "firebase/app";
import "firebase/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWg3uaXj5S-SP5P2xVvvQ2XdWUu2krkhE",
  authDomain: "freshcord-2140b.firebaseapp.com",
  databaseURL: "https://freshcord-2140b-default-rtdb.firebaseio.com",
  projectId: "freshcord-2140b",
  storageBucket: "freshcord-2140b.appspot.com",
  messagingSenderId: "298380572404",
  appId: "1:298380572404:web:30dd47db3988743e1c50a1",
  measurementId: "G-HZ6V051XLE",
});

export const auth = app.auth();

export default app;
