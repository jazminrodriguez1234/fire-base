import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCrB4xgCBRmpujDcvOOihSVZ6MIFOPE56M",
    authDomain: "proyectoclase1-2025.firebaseapp.com",
    databaseURL: "https://proyectoclase1-2025-default-rtdb.firebaseio.com",
    projectId: "proyectoclase1-2025",
    storageBucket: "proyectoclase1-2025.firebasestorage.app",
    messagingSenderId: "822869341917",
    appId: "1:822869341917:web:8d4d76a6493df78963cd34"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let parrafo = document.querySelector("p");

const refDatos = ref(db, "huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()
    parrafo.textContent = `La huerta tiene una temperatura en el suelo de ${huerta.tempSuelo}° y de humedad de ${huerta.humSuelo}`
    
   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaWTvfwzoYMd6IatV9nJocVf8ufBR2VA",
  authDomain: "huerta-proyecto.firebaseapp.com",
  projectId: "huerta-proyecto",
  storageBucket: "huerta-proyecto.firebasestorage.app",
  messagingSenderId: "55157905871",
  appId: "1:55157905871:web:a86428a87976df0ea25aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaWTvfwzoYMd6IatV9nJocVf8ufBR2VA",
  authDomain: "huerta-proyecto.firebaseapp.com",
  projectId: "huerta-proyecto",
  storageBucket: "huerta-proyecto.firebasestorage.app",
  messagingSenderId: "55157905871",
  appId: "1:55157905871:web:a86428a87976df0ea25aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


