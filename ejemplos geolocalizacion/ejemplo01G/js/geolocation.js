function iniciar() {
    var elemento = document.getElementById("obtener");
    elemento.addEventListener("click", obtenerubicacion);
}

function obtenerubicacion() {
    //navigator.geolocation.getCurrentPosition(mostrar);
    //navigator.geolocation.getCurrentPosition(mostrar, mostrarerror);
    /*var geoconfig = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
        };
        navigator.geolocation.getCurrentPosition(mostrar, mostrarerror, geoconfig);
        */
    var geoconfig = {
            enableHighAccuracy: true,
            maximumAge: 60000
        };
    control = navigator.geolocation.watchPosition(mostrar, mostrarerror, geoconfig);   
}

function mostrar(posicion) {
    var ubicacion = document.getElementById("ubicacion");
    var datos = "";
    datos += "Latitud: " + posicion.coords.latitude + "<br>";
    datos += "Longitud: " + posicion.coords.longitude + "<br>";
    datos += "Exactitud: " + posicion.coords.accuracy + "mts.<br>";
    ubicacion.innerHTML = datos;
}
function mostrarerror(error) {
    alert("Error: " + error.code + " " + error.message);
}
window.addEventListener("load", iniciar);