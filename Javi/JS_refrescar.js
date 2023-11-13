function refrescar() {
  var refrescarButton = document.getElementById('refrescar');
  refrescarButton.removeEventListener('click', refrescar); // Elimina el manejador de eventos temporalmente

  // Deshabilitar el botón de "Refrescar" para evitar múltiples clics
  refrescarButton.disabled = true;

  var xmlHttpRefrescar = new XMLHttpRequest();
  var URL_REFRESCAR = "http://localhost:5501/";
  var RECURSO_REFRESCAR = "dato.json";

  xmlHttpRefrescar.open('GET', URL_REFRESCAR + RECURSO_REFRESCAR, true);

  xmlHttpRefrescar.onreadystatechange = function() {
    if (xmlHttpRefrescar.readyState === 4) {
      if (xmlHttpRefrescar.status === 200) {
        datos = JSON.parse(xmlHttpRefrescar.responseText);
        alert("Datos refrescados correctamente");

        // Restablecer el formulario
        formulario.reset();

        // Habilitar el botón de "Refrescar" nuevamente
        refrescarButton.disabled = false;

        refrescarButton.addEventListener('click', refrescar); // Agrega el manejador de eventos nuevamente
      } else {
        alert("Error al refrescar datos");
        console.log(xmlHttpRefrescar.readyState);
        refrescarButton.disabled = false; // Asegurarse de habilitar el botón en caso de error
        refrescarButton.addEventListener('click', refrescar); // Agrega el manejador de eventos nuevamente
      }
    }
  }

  xmlHttpRefrescar.send(null);
}