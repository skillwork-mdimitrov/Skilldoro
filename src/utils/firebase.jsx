import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

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

const db = getDatabase();

export function writeUserData(userId, name, rewardPoints) {
    set(ref(db, 'users/' + userId), {
        username: name,
        reward_points: rewardPoints
    });
}

export function getUserData() {
    const starCountRef = ref(db, 'users/');
    let points = 0;
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        points = data[1].reward_points;
    });
    return points;
}

getUserData();






