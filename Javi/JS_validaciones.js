// Función de validación 
function validacion() {
  // Le damos a preguna la referencia del elemento que tiene por id 'texto1'
    pregunta = document.getElementById('texto1')
    // Si el valor de pregunta esta en blanco, sacamos una alerta con mensaje,
        // y hacemos un retur false para que detenga el proceso del envio de formulario.
    if (pregunta.value === '') {
      alert('[ERROR] Por favor, el nombre es obligatorio')
      return false
    }
    // Hacemos lo mismo con todos los input type text pasandoles su id.
    pregunta2 = document.getElementById('texto2')
    if (pregunta2.value === '') {
      alert('[ERROR] Por favor, la dirección es obligatoria')
      return false;
    }
  
    pregunta3 = document.getElementById('texto3')
    if (pregunta3.value === '') {
      alert('[ERROR] Por favor, el teléfono es obligatorio')
      return false
    }
  
    pregunta4 = document.getElementById('texto4')
    if (pregunta4.value === '') {
      alert('[ERROR] Por favor, el email es obligatorio')
      return false
    }
  
    pregunta5 = document.getElementsByName('tamaño')
    //  Obtenemos en pregunta5 una coleccion de elementos cuyo name es tamaño
    var seleccionado = false
    // Creamos la variable seleccionado para continuar o detener el proceso
    for (var i = 0; i < pregunta5.length; i++) {
      // Recorremos el array de pregunta5
      if (pregunta5[i].checked) {
        // Si uno de los elementos (pasandole pregunta 5) esta seleccionado 
        // devolvemos true para seguir con el proceso
        seleccionado = true
        break
      }
    }
  
    if (!seleccionado) {
      // Si uno de los elementos (pasandole pregunta 5) no esta seleccionado 
      // devolvemos false para detener  el proceso y sacamos una alerta
      alert('[ERROR] Por favor seleccione un tamaño')
      return false
    }
  
    pregunta6 = document.getElementsByName('ingrediente')
    var seleccionado1 = false
  
    for (var i = 0; i < pregunta6.length; i++) {
      if (pregunta6[i].checked) {
        seleccionado1 = true
        break
      }
    }
  
    if (!seleccionado1) {
      alert('[ERROR] Por favor seleccione un ingrediente')
      return false
    }
    // Creamos la variable precioTamaño para recoger el valor del tamaño que selecciona.
    // Cremos una variable por cada opcion de tamaño, y le pasamos la referencia por su id. 
    // Chequeamos cual esta seleccionada y le damos el valor correspondiente a precioTmaño
    var precioTamaño = 0
  
    pregunta7 = document.getElementById('Pequeña  : 5€ ')
    if (pregunta7.checked) {
      precioTamaño = 5
    }
  
    pregunta8 = document.getElementById('Mediana : 10€ ')
    if (pregunta8.checked) {
      precioTamaño = 10
    }
  
    pregunta9 = document.getElementById('Grande : 15€ ')
    if (pregunta9.checked) {
      precioTamaño = 15
    }
  // Creamos la variable precioIngredientes, con un for, recorremos los checkboxes y
  // si estan seleccionados, recogemos su valor del nombre en la variable nombreIngrediente.
  // y on otro for recorremos los ingredientes cuyo nombre sea igual al seleccionado y 
  // vamos sumando su precio en la variale precio ingrediente
    var precioIngredientes = 0
    var checkboxes = document.getElementsByName('ingrediente')
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        var nombreIngrediente = checkboxes[i].value
  
        for (var j = 0; j < datos.ingredientes.length; j++) {
          if (datos.ingredientes[j].nombre === nombreIngrediente) {
            precioIngredientes += datos.ingredientes[j].precio
            break;
          }
        }
      }
    }
  // sumamos los dos precios obtenidos en la variable precio total y lo mostramos por alerta
    var precioTotal = precioTamaño + precioIngredientes;
  
    alert('El precio de su pizza es : ' + precioTotal);

    return false;
  }