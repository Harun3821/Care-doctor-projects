
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-librarie s

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: import.meta.env.VITE_apiKey,
//    authDomain:import.meta.env.VITE_authDomain,
//    projectId:import.meta.env.VITE_projectId,
//    storageBucket:import.meta.env.VITE_storageBucket,
//    messagingSenderId:import.meta.env.VITE_messagingSenderId,
//    appId:import.meta.env.VITE_appId
//  };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAitGk9RMXSDGO3cOsPZSz_0YOAC15n_Mk",
  authDomain: "cart-doctor-project.firebaseapp.com",
  projectId: "cart-doctor-project",
  storageBucket: "cart-doctor-project.appspot.com",
  messagingSenderId: "506429035388",
  appId: "1:506429035388:web:e53b112769d7a1c8c68af9"
};

const app = initializeApp(firebaseConfig);
export default app;
