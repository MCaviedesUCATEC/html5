function iniciar() {
    var elemento = document.getElementById("obtener");
    elemento.addEventListener("click", obtenerubicacion);
}

function obtenerubicacion() {
    navigator.geolocation.getCurrentPosition(mostrar, mostrarerror);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById("ubicacion");
    var mapurl = "http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude; 
    ubicacion.innerHTML = '<img src="' + mapurl + '">';
}

function mostrarerror(error) {
    alert("Error: " + error.code + " " + error.message);
}

window.addEventListener("load", iniciar);
