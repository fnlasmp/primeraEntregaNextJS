import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBUN8bjO6pN-hKWChufiNxSChClP-XIa4k",
  
    authDomain: "nextjsprueba-a2d00.firebaseapp.com",
  
    projectId: "nextjsprueba-a2d00",
  
    storageBucket: "nextjsprueba-a2d00.firebasestorage.app",
  
    messagingSenderId: "268669439048",
  
    appId: "1:268669439048:web:fd1e0ab434b84c0e545c7d",
  
    measurementId: "G-4ZC7E9P0W0"
  
  };
  

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);  
} else {
  app = getApps()[0]; 
}

const db = getFirestore(app);
export const auth = getAuth(app);

export default db;