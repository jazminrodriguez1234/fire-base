import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

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
let baseDatos = getDatabase(aplicacion);

let referenciaDatos = ref(baseDatos, "sensores/suelo");

onValue(referenciaDatos, function(datos) {
    let info = datos.val();
    let temperatura = info.temperatura;
    let humedadSuelo = info.humedadSuelo;

    document.querySelector("#tempSuelo").innerHTML = "Temperatura: " + temp + " °C";
    document.querySelector("#humedadSuelo").innerHTML = "Humedad: " + humedad + " %";

    let estado = "";

    if (humedadSuelo < 40) {
        estado = "Regar";
    } else if (humedadSuelo >= 40 && humedad <= 70) {
        estado = "Estable";
    } else {
        estado = "Muy Húmedo";
    }

    document.querySelector("#estadoSuelo").innerHTML = "Estado: " + estado;
});
