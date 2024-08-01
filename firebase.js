import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtzctVIaEzapgNz7JfPWGmaIOJpInGY-E",
  authDomain: "pantry-c083a.firebaseapp.com",
  projectId: "pantry-c083a",
  storageBucket: "pantry-c083a.appspot.com",
  messagingSenderId: "601315602893",
  appId: "1:601315602893:web:f792358b8c261575869484"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const firestore = getFirestore(app);

// Export Firestore
export { firestore };
