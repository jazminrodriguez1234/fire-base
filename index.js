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


const refDatos = ref(db, "/huerta");


let imgPlanta = document.getElementById("planta");


onValue(refDatos, (snapshot) => {
    let huerta = snapshot.val();


    hum.textContent = `${huerta.tempSuelo}°  ${huerta.humSuelo}`;
    temp.textContent = `${huerta.tempSuelo}°  ${huerta.humSuelo}`;
    estado.textContent = `${huerta.tempSuelo}°  ${huerta.humSuelo}`;


    if (huerta.humSuelo < -30) {
        imgPlanta.src = "muerta.png";
    } else {
        imgPlanta.src = "viva.png";
    }
});
