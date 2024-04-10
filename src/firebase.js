
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwZBFc6Oxn7FjbtOaXIyK1GlqUtZlEuOE",
  authDomain: "schemebot-1.firebaseapp.com",
  projectId: "schemebot-1",
  storageBucket: "schemebot-1.appspot.com",
  messagingSenderId: "952847575500",
  appId: "1:952847575500:web:f9eb833af9c5105807d569"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
