// /js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBBsxNIJOijdGmVUcsRt0zPNQq96YYgWAc",
  authDomain: "fees-sheet-online.firebaseapp.com",
  projectId: "fees-sheet-online",
  storageBucket: "fees-sheet-online.firebasestorage.app",
  messagingSenderId: "1018149181136",
  appId: "1:1018149181136:web:9fa630cd808b96d31df0d5",
  measurementId: "G-F29K3GV8YK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
