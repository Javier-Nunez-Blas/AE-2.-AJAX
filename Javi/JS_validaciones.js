// Función de validación
function validacion() {
    pregunta = document.getElementById('texto1');
    if (pregunta.value === '') {
      alert('[ERROR] Por favor, el nombre es obligatorio');
      return false;
    }
  
    pregunta2 = document.getElementById('texto2');
    if (pregunta2.value === '') {
      alert('[ERROR] Por favor, la dirección es obligatoria');
      return false;
    }
  
    pregunta3 = document.getElementById('texto3');
    if (pregunta3.value === '') {
      alert('[ERROR] Por favor, el teléfono es obligatorio');
      return false;
    }
  
    pregunta4 = document.getElementById('texto4');
    if (pregunta4.value === '') {
      alert('[ERROR] Por favor, el email es obligatorio');
      return false;
    }
  
    pregunta5 = document.getElementsByName('tamaño');
    var seleccionado = false;
  
    for (var i = 0; i < pregunta5.length; i++) {
      if (pregunta5[i].checked) {
        seleccionado = true;
        break;
      }
    }
  
    if (!seleccionado) {
      alert('[ERROR] Por favor seleccione un tamaño');
      return false;
    }
  
    pregunta6 = document.getElementsByName('ingrediente');
    var seleccionado1 = false;
  
    for (var i = 0; i < pregunta6.length; i++) {
      if (pregunta6[i].checked) {
        seleccionado1 = true;
        break;
      }
    }
  
    if (!seleccionado1) {
      alert('[ERROR] Por favor seleccione un ingrediente');
      return false;
    }
  
    var precioTamaño = 0;
  
    pregunta7 = document.getElementById('Pequeña');
    if (pregunta7.checked) {
      precioTamaño = 5;
    }
  
    pregunta8 = document.getElementById('Mediana');
    if (pregunta8.checked) {
      precioTamaño = 10;
    }
  
    pregunta9 = document.getElementById('Grande');
    if (pregunta9.checked) {
      precioTamaño = 15;
    }
  
    var precioIngredientes = 0;
    var checkboxes = document.getElementsByName('ingrediente');
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        var nombreIngrediente = checkboxes[i].value;
  
        for (var j = 0; j < datos.ingredientes.length; j++) {
          if (datos.ingredientes[j].nombre === nombreIngrediente) {
            precioIngredientes += datos.ingredientes[j].precio;
            break;
          }
        }
      }
    }
  
    var precioTotal = precioTamaño + precioIngredientes;
  
    alert('El precio de su pizza es : ' + precioTotal);

    return false;
  }