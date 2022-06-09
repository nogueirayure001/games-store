import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5M-cDSirZwp5PS3OXft07aYVUUD_ilO0",
  authDomain: "wolff-gamestore.firebaseapp.com",
  projectId: "wolff-gamestore",
  storageBucket: "wolff-gamestore.appspot.com",
  messagingSenderId: "683729158724",
  appId: "1:683729158724:web:727a2faf3b8dc49842f211",
};

export const app = initializeApp(firebaseConfig);
