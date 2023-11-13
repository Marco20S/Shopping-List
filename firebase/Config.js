// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import auth from '@react-native-firebase/auth';
import "firebase/auth"

import { initializeAuth, get } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDX86snzUSp9kD-r1L2e_lbbIJbpvtJNY",
  authDomain: "shoppinglist-2c5d1.firebaseapp.com",
  projectId: "shoppinglist-2c5d1",
  storageBucket: "shoppinglist-2c5d1.appspot.com",
  messagingSenderId: "186766100662",
  appId: "1:186766100662:web:b989c2e721bdb1b3a87e17"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default getFirestore(app)
export const database = getFirestore(app);
export const storage = getStorage(app)

//auth for firebase
// export const auth = getAuth(app)

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});