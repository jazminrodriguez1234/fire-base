let url = "https://huertili-datini-default-rtdb.firebaseio.com/suelo.json";

let elementoTemp = document.querySelector("#temp");
let elementoHum = document.querySelector("#hum");
let elementoEstado = document.querySelector("#estado");

let obtenerDatos = async function () {
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    let temperatura = datos.temperatura;
    let humedad = datos.humedad;
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
