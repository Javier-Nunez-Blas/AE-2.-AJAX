// Creamos la funcion
function validacion() {

    pregunta = document.getElementById('texto1')
    // Le damos a preguna la referencia del elemento que tiene por id 'texto1'
    if(pregunta.value == '') {
        // Si el valor de pregunta esta en blanco, sacamos una alerta con mensaje,
        // y hacemos un retur false para que detenga el proceso del envio de formulario.
        alert('[ERROR] Por favor, el nombre es obligatorio')
        return false
    }
    // Hacemos lo mismo con todos los input type text pasandoles su id.
    pregunta2 = document.getElementById('texto2')
    if(pregunta2.value == '') {
        alert('[ERROR] Por favor, la direccion es obligatorio')
        return false
    }

    pregunta3 = document.getElementById('texto3')
    if(pregunta3.value == '') {
        alert('[ERROR] Por favor, el telefono es obligatorio')
        return false
    }

    pregunta4 = document.getElementById('texto4')
    if(pregunta4.value == '') {
        alert('[ERROR] Por favor, el email es obligatorio')
        return false
    }

    pregunta5 = document.getElementsByName('tamaño')
    //  Obtenemos en pregunta5 una coleccion de elementos cuyo name es tamaño
    var seleccionado = false
    // Creamos la variable seleccionado para continuar o detener el proceso
    for(var i=0; i<pregunta5.length; i++) {
        // Recorremos el array de pregunta5
        if(pregunta5[i].checked) {
            // Si uno de los elementos (pasandole pregunta 5) esta seleccionado 
            // devolvemos true para seguir con el proceso
            seleccionado = true
            break;
        }
    }
        if(!seleccionado) {
            // Si uno de los elementos (pasandole pregunta 5) no esta seleccionado 
            // devolvemos false para detener  el proceso y sacamos una alerta
            alert('[ERROR] Por favor seleccione un tamaño')
            return false
        }

    pregunta6 = document.getElementsByName('Ingredientes')
    var seleccionado1 = false
    for(var i=0; i<pregunta6.length; i++) {
        if(pregunta6[i].checked) {
            seleccionado1 = true
            break
        }
    }
        if(!seleccionado1) {
            alert('[ERROR] Por favor seleccione un ingrediente')
            return false
        }

    // Creamos la variable precioTamaño para recoger el valor del tamaño que selecciona.
    // Cremos una variable por cada opcion de tamaño, y le pasamos la referencia por su id. 
    // Chequeamos cual esta seleccionada y le damos el valor correspondiente a precioTmaño
    var precioTamaño = 0

    pregunta7 = document.getElementById('Pequeña')
        if(pregunta7.checked) {
            precioTamaño = 5
        }

    pregunta8 = document.getElementById('Mediana')
        if(pregunta8.checked) {
            precioTamaño = 10
        }

    pregunta9 = document.getElementById('Grande')
        if(pregunta9.checked) {
            precioTamaño = 15
        }
    
    // Crreamos una variable para recoger el valor de cada ingrediente.
    // Creamos una variable por cada opcion de ingrediente pasndole la referencia por 
    // su id. Chequeamos cual esta seleccionada y le damos el valor 1
    
    var precioIngredientes1 = 0
    var precioIngredientes2 = 0
    var precioIngredientes3 = 0
    var precioIngredientes4 = 0

    pregunta10 = document.getElementById('checkbox1')
        if(pregunta10.checked) {
            precioIngredientes1 = 1
        }

    pregunta11 = document.getElementById('checkbox2')
        if(pregunta11.checked) {
            precioIngredientes2 = 1
        }

    pregunta12 = document.getElementById('checkbox3')
        if(pregunta12.checked) {
            precioIngredientes3 = 1
        }

    pregunta13 = document.getElementById('checkbox4')
        if(pregunta13.checked) {
            precioIngredientes4 = 1
        }

    // Creamos la variable precioTotal y le sumamos todos los precios obtenidos
    var precioTotal = 0
    precioTotal = precioTamaño + precioIngredientes1 + precioIngredientes2 + precioIngredientes3 + precioIngredientes4;
    // Si todo esta correcto mandamos una alerta indicandole el precio total y 
    // enviamos el proceso del formulario
    alert('El precio de su pizza es : ' + precioTotal)
    return true
    }
//  Cuando se cargue la página completamente se ejecute el codigo que hay dentro
window.onload = function(){
    formulario.onsubmit = validacion
}