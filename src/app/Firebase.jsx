import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjRYcNm6DUx46iHsJrm6snelrURAVAdco",
  authDomain: "crudauth-1b721.firebaseapp.com",
  projectId: "crudauth-1b721",
  storageBucket: "crudauth-1b721.firebasestorage.app",
  messagingSenderId: "1075732580267",
  appId: "1:1075732580267:web:1208f1c25bfc3524de34ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


