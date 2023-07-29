import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kits-imprimibles.firebaseapp.com",
  projectId: "kits-imprimibles",
  storageBucket: "kits-imprimibles.appspot.com",
  messagingSenderId: "246802718923",
  appId: "1:246802718923:web:eece1e203976089fdebb4e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


