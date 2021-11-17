window.onload = function () {
  // Variables

  // Añadir las tres imágenes del directorio "img" al array IMAGENES.
  const IMAGENES = [];

  IMAGENES[0] = "img/img1.jpg";
  IMAGENES[1] = "img/img2.jpg";
  IMAGENES[2] = "img/img3.jpg";

  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

  // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
  let posicionActual = 0;

  // variables con los elementos del DOM HTML, aplicar el selector necesario.
  let $botonRetroceder = document.getElementById("retroceder");
  let $botonAvanzar = document.getElementById("avanzar");
  let $imagen = document.getElementById("imagen");
  let $botonPlay = document.getElementById("play");
  let $botonStop = document.getElementById("stop");

  // Identificador del proceso que se ejecuta con setInterval().
  let intervalo;

  // Funciones

  //Funcion que cambia la foto en la siguiente posicion

  function pasarFoto() {
    // se incrementa el indice (posicionActual)
    switch (posicionActual) {
      case 0:
        posicionActual++;
        renderizarImagen();
        break;
      case 1:
        posicionActual++;
        renderizarImagen();
        break;
      case 2:
        posicionActual = 0;
        renderizarImagen();
        break;
    }
    // ...y se muestra la imagen que toca.
  }

  //Funcion que cambia la foto en la anterior posicion
  function retrocederFoto() {
    // se incrementa el indice (posicionActual)
    switch (posicionActual) {
      case 0:
        posicionActual = 2;
        renderizarImagen();
        break;
      case 1:
        posicionActual = 0;
        renderizarImagen();
        break;
      case 2:
        posicionActual = 1;
        renderizarImagen();
        break;
    }
    // ...y se muestra la imagen que toca.
  }

  //Funcion que actualiza la imagen de imagen dependiendo de posicionActual

  function renderizarImagen() {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  //Activa el autoplay de la imagen

  function playIntervalo() {
    // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    setInterval(intervalo);
    // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.
    $botonPlay.disabled = true;
    $botonStop.disabled = false;
  }

  //Para el autoplay de la imagen

  function stopIntervalo() {
    // Desactivar la ejecución de intervalo.
    // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    clearInterval(intervalo);
    $botonStop.disabled = true;
    $botonPlay.disabled = false;
  }

  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
           retrocederFoto();
           break;
        case 39:
          pasarFoto();    
          break;
       
    }
});

  // Eventos
  // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.

  // Iniciar
  $botonPlay.addEventListener("click", playIntervalo);
  $botonStop.addEventListener("click", stopIntervalo);
  $botonRetroceder.addEventListener("click", retrocederFoto);
  $botonAvanzar.addEventListener("click", pasarFoto);
  renderizarImagen();
};
