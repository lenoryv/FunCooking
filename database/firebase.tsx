import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCqm1UVN0VAoGS429aE5vnu2KChTmgQrSo",
    authDomain: "funcooking-7a614.firebaseapp.com",
    projectId: "funcooking-7a614",
    storageBucket: "funcooking-7a614.appspot.com",
    messagingSenderId: "589230156979",
    appId: "1:589230156979:web:ff8af5a8f2cc01f73054c6",
    measurementId: "G-TG05BXFZB1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default {
    firebase,
    db
  }
