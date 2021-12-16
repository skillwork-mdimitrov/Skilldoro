import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAvebDuZ94aWip9t8VNg3Un_tKO4Lj7QzY",
    authDomain: "skilldoro.firebaseapp.com",
    projectId: "skilldoro",
    storageBucket: "skilldoro.appspot.com",
    messagingSenderId: "1084723287604",
    appId: "1:1084723287604:web:f246484a16811b074edc61",
    databaseURL: "https://skilldoro-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, rewardPoints) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        reward_points: rewardPoints
    });
}

writeUserData(1, "Maksim Dimitrov", "1000");
