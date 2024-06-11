import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW08IVo-BeY3WnxO1N0dovMjNHH5xgKVs",
  authDomain: "car-rent-4bd5a.firebaseapp.com",
  projectId: "car-rent-4bd5a",
  storageBucket: "car-rent-4bd5a.appspot.com",
  messagingSenderId: "661115430231",
  appId: "1:661115430231:web:8b9af05e544b04e5df4a12",
  measurementId: "G-DFYRY8JHBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
