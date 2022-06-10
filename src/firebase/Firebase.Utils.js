import firebase from "firebase/compat";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {doc, getDoc, setDoc,} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA8r6Fd8hgiTxcOyMS0hh47CWJeRjWkg5Y",
    authDomain: "crwn-db-bffb0.firebaseapp.com",
    projectId: "crwn-db-bffb0",
    storageBucket: "crwn-db-bffb0.appspot.com",
    messagingSenderId: "664888298627",
    appId: "1:664888298627:web:58a7f95ad57a8cd142dfb6",
    measurementId: "G-9CRG340MT9"
};

const firebaseApp = initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return; //exits the function

    const userRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userRef);

    // check if the snapshot does not exist
    // set it inside the database
    if (!userSnapShot.exists()) {

        const {name, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                name,
                email,
                createdAt
            }, {merge: true});

        } catch (error) {
            console.log('Error creating user', error.message);
        }
        return userRef;
    }

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const signInWithGoogle = () => signInWithPopup(auth, provider);


