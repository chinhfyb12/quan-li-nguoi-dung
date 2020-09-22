import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDSRS7IL-T01BhREyBgHg-mch0zj2j44xw",
    authDomain: "manageuser-b8484.firebaseapp.com",
    databaseURL: "https://manageuser-b8484.firebaseio.com",
    projectId: "manageuser-b8484",
    storageBucket: "manageuser-b8484.appspot.com",
    messagingSenderId: "136851858317",
    appId: "1:136851858317:web:50526b8fe7695f752c93c4",
    measurementId: "G-MRRZMCTNM8"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const dataUserFirebase = firebase.database().ref('dataUser/');

export default dataUserFirebase;