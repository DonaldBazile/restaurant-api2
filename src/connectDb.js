//import tools from firebase
//import firestore from firebase
import { initializeApp, getApps, cert } from 'firebase-admin/app';
// import my credentials to connect to firebase
import { getFirestore } from 'firebase-admin/firestore';
import myCredentials from '../credentials.js';

//write a function to connect to firebase
export default function connectDb() {
    if(getApps().length === 0) {
        initializeApp({
            credential: cert(myCredentials)  
        });             
    } 
    return getFirestore();  
}
   