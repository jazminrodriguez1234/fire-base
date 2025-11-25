import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

let configuracionFirebase = {
    apiKey: "AIzaSyDmN4qBz3Aw5x7GO0Z-jB_viG6esOtbFVI",
    authDomain: "huertili-datini.firebaseapp.com",
    databaseURL: "https://huertili-datini-default-rtdb.firebaseio.com",
    projectId: "huertili-datini",
    storageBucket: "huertili-datini.firebasestorage.app",
    messagingSenderId: "675544360936",
    appId: "1:675544360936:web:e50313a4113bf99980265d"
};

let aplicacion = initializeApp(configuracionFirebase);

let url = "https://huertili-datini-default-rtdb.firebaseio.com/suelo.json";

let elementoTemp = document.querySelector("#temp");
let elementoHum = document.querySelector("#hum");
let elementoEstado = document.querySelector("#estado");

let obtenerDatos = async function () {
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    let temperatura = data.temperatura;
    let humedad = data.humedadAire;
    elementoTemp.textContent = temperatura;
    elementoHum.textContent = humedad;
    let estado = "";
    if (humedad < 40) {
        estado = "Regar";
    } else {
        estado = "Estable";
    }
    elementoEstado.textContent = estado;
};

setInterval(obtenerDatos, 2000);
obtenerDatos();
