import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAvebDuZ94aWip9t8VNg3Un_tKO4Lj7QzY",
    authDomain: "skilldoro.firebaseapp.com",
    projectId: "skilldoro",
    storageBucket: "skilldoro.appspot.com",
    messagingSenderId: "1084723287604",
    appId: "1:1084723287604:web:f246484a16811b074edc61"
};

const app = initializeApp(firebaseConfig);

console.log(app);
