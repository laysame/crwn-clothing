import firebase from "firebase/compat";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {doc, setDoc, getDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA8r6Fd8hgiTxcOyMS0hh47CWJeRjWkg5Y",
    authDomain: "crwn-db-bffb0.firebaseapp.com",
    projectId: "crwn-db-bffb0",
    storageBucket: "crwn-db-bffb0.appspot.com",
    messagingSenderId: "664888298627",
    appId: "1:664888298627:web:58a7f95ad57a8cd142dfb6",
    measurementId: "G-9CRG340MT9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; //exits the function

    const userRef = doc(db, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        try {
            await setDoc(userRef, {
                email: userAuth.email,
                name: userAuth.displayName,
                createdAt: new Date()
            }, {merge: true});

        } catch (error) {
            console.log('Error creating user', error.message);
        }
        return userRef;
    }

}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);


