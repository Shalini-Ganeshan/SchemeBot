
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvpBsX19l43LMCxTcG_YZx5GSDNmcp5JM",
  authDomain: "schemebot-978c3.firebaseapp.com",
  projectId: "schemebot-978c3",
  storageBucket: "schemebot-978c3.appspot.com",
  messagingSenderId: "1082331250282",
  appId: "1:1082331250282:web:6731088669da7fd9211413"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;