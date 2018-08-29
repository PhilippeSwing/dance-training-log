import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnfGsGTCwaS2WkfaVIylqCAPj_rLZ03Lg",
    authDomain: "dance-training-log.firebaseapp.com",
    databaseURL: "https://dance-training-log.firebaseio.com",
    projectId: "dance-training-log",
    storageBucket: "dance-training-log.appspot.com",
    messagingSenderId: "1092477066954"
};
firebase.initializeApp(config);

// This exports the configured version of firebase
export default firebase;