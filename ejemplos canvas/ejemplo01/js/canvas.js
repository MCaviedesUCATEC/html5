function iniciar() {
    //Graficos (lienzo y contexto)
    var elemento = document.getElementById("canvas");
    var canvas = elemento.getContext("2d");
    //-------------------- Dibujando -------------------------
    //gradiente
    /*
    var gradiente = canvas.createLinearGradient(0, 0, 10, 100);
    gradiente.addColorStop(0.5, "#00AAFF");
    gradiente.addColorStop(1, "#000000");
    canvas.fillStyle = gradiente;
    canvas.fillRect(10, 10, 90, 90);
    canvas.fillRect(150, 10, 100, 100);
    */

    //rectangulo
    /*
    canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(120, 120, 80, 80);
    */

    //trazado
    /*
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(100, 200);
    canvas.stroke();
    */

    //trazado 2
    /*
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(100, 200);
    canvas.closePath();
    canvas.stroke();
    */

    //figura
   /*
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(100, 200);
    canvas.fill();
    */

    //figura en lineas
    /*
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(200, 200);
    canvas.lineTo(100, 200);
    canvas.clip();
    canvas.beginPath();
    for (var f = 0; f < 300; f = f + 10) {
    canvas.moveTo(0, f);
    canvas.lineTo(500, f);
    }
    canvas.stroke();
    */

    //arco
    /*
    canvas.beginPath();
    canvas.arc(100, 100, 50, 0, Math.PI * 2, false);
    canvas.stroke();
    */

    //arco con valor radiante cambiable (circulo mayor)
   /*
    var radianes = Math.PI / 180 * 45;
    canvas.beginPath();
    canvas.arc(100, 100, 50, 0, radianes, false);
    canvas.stroke();
    */

    //curva cuadratica
    /*
    canvas.beginPath();
    canvas.moveTo(50, 50);
    canvas.quadraticCurveTo(100, 125, 50, 200);
    canvas.moveTo(250, 50);
    canvas.bezierCurveTo(200, 125, 300, 125, 250, 200);
    canvas.stroke();
    */

    //combinacion
    /*
    canvas.beginPath();
    canvas.arc(200, 150, 50, 0, Math.PI * 2, false);
    canvas.stroke();
    canvas.lineWidth = 10;
    canvas.lineCap = "round";
    canvas.beginPath();
    canvas.moveTo(230, 150);
    canvas.arc(200, 150, 30, 0, Math.PI, false);
    canvas.stroke();
    canvas.lineWidth = 5;
    canvas.lineJoin = "miter";
    canvas.beginPath();
    canvas.moveTo(195, 135);
    canvas.lineTo(215, 155);
    canvas.lineTo(195, 155);
    canvas.stroke();
    */

    //texto
    /*
    canvas.font = "bold 24px verdana, sans-serif";
    canvas.textAlign = "start";
    canvas.textBaseline = "bottom";
    canvas.fillText("Mi Mensaje", 100, 124);
    var tamano = canvas.measureText("Mi Mensaje");
    canvas.strokeRect(100, 100, tamano.width, 24);
    */

    //sombra
    /*
    canvas.shadowColor = "rgba(0, 0, 0, 0.5)";
    canvas.shadowOffsetX = 4;
    canvas.shadowOffsetY = 4;
    canvas.shadowBlur = 5;
    canvas.font = "bold 50px verdana, sans-serif";
    canvas.fillText("Mi Mensaje", 100, 100);
    */

    //texto rotacion
    /*
    canvas.fillText("PRUEBA", 50, 20);
    canvas.translate(50, 70);
    canvas.rotate(Math.PI / 180 * 45);
    canvas.fillText("PRUEBA", 0, 0);
    canvas.rotate(-Math.PI / 180 * 45);
    canvas.translate(0, 100);
    canvas.scale(2, 2);
    canvas.fillText("PRUEBA", 0, 0);
    */

    //transformar
    /*
    canvas.transform(3, 0, 0, 1, 0, 0);
    canvas.font = "bold 20px verdana, sans-serif";
    canvas.fillText("PRUEBA", 20, 20);
    canvas.transform(1, 0, 0, 10, 0, 0);
    canvas.font = "bold 20px verdana, sans-serif";
    canvas.fillText("PRUEBA", 20, 20);
    */
    //estado
    /*
    canvas.save();
    canvas.translate(50, 70);
    canvas.font = "bold 20px verdana, sans-serif";
    canvas.fillText("PRUEBA1", 0, 30);
    canvas.restore();
    /*

    //La propiedad GlobalCompositeOperation
    /*
    canvas.fillStyle = "#666666";
    canvas.fillRect(50, 100, 300, 80);
    canvas.globalCompositeOperation = "source-atop";
    canvas.fillStyle = "#DDDDDD";
    canvas.font = "bold 60px verdana, sans-serif";
    canvas.textAlign = "center";
    canvas.textBaseline = "middle";
    canvas.fillText("PRUEBA", 200, 100);
    */
   //------------------- Imagenes ---------------------
   /* 
    var imagen = document.createElement("img");
        imagen.src = "imagenes/nieve.jpeg";
        imagen.addEventListener("load", function() {
            canvas.drawImage(imagen, 20, 20);
            //canvas.drawImage(imagen, 0, 0, elemento.width, elemento.height);
            //canvas.drawImage(imagen, 135, 30, 50, 50, 0, 0, 300, 300);        
        });
    */
   //patrones
   /*
   imagen = document.createElement("img");
   imagen.src = "imagenes/ladrillos.jpg";
   imagen.addEventListener("load", agregarpatron);
   */
   //Datos imagen
   imagen = document.createElement("img");
   imagen.src = "imagenes/nieve.jpeg";
   imagen.addEventListener("load", modimagen);
   //Origen cruzado

   //extrayendo datos

   //------------------ Animaciones -----------------
   //animaciones simples
    
   //animaciones profesionales

   //----------------- Video ---------------------
   //aplicacion de la vida real

}

function agregarpatron() {
    var patron = canvas.createPattern(imagen, "repeat");
    canvas.fillStyle = patron;
    canvas.fillRect(0, 0, 500, 300);
}

function modimagen() {
    canvas.drawImage(imagen, 0, 0);
    var info = canvas.getImageData(0, 0, 175, 262);
    var pos;
    for (var x = 0; x < 175; x++) {
        for (var y = 0; y < 262; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos] = 255 - info.data[pos];
            info.data[pos+1] = 255 - info.data[pos+1];
            info.data[pos+2] = 255 - info.data[pos+2];
        }
    }
    canvas.putImageData(info, 0, 0);
}

window.addEventListener("load", iniciar);
