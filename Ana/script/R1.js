 // función que llama a todos los campos del formulario
 function crearFormulario() {
    var formulario = document.createElement("form");
    crearButton(formulario);
    crearTexto(formulario);
    crearCheckbok(formulario);
    crearImagen(formulario);
    crearSelect(formulario);
    colorButton(formulario);
    textArea(formulario); 
}

// función para crear los campos del formulario para completar con texto
// por el usuario
function crearTexto(formulario) {

    // creamos el texto "Selecciona una opción"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "DATOS PERSONALES:";
    formulario.appendChild(seleccionaOpcion);
    
    // creamos la variable "nombre" de tipo input
    var nombre = document.createElement("input");
    // creamos los atributos del campo "nombre"
    nombre.setAttribute("type", "text");
    nombre.setAttribute("name", "nombre");
    nombre.setAttribute("placeholder", "Nombre"); //sugerencia para el usuario
    // adjuntamos la variable nombre al formulario
    formulario.appendChild(nombre);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // creamos la variable "apellidos" de tipo input
    var apellidos = document.createElement("input");
    // creamos los atributos del campo "apellidos"
    apellidos.setAttribute("type", "name");
    apellidos.setAttribute("name", "apellidos");
    apellidos.setAttribute("placeholder", "Apellidos");
    // adjuntamos la variable "apellidos" al formulario
    formulario.appendChild(apellidos);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);
   
    // creamos la variable "dni" de tipo input
    var dni = document.createElement("input");
    // creamos los atributos del campo "dni"
    dni.setAttribute("type", "text");
    dni.setAttribute("name", "dni");
    dni.setAttribute("placeholder", "Dni");
    // adjuntamos la variable "dni" al formulario
    formulario.appendChild(dni);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // creamos la variable "dirección" de tipo input
    var direccion = document.createElement("input");
    // creamos los atributos de la variable "dirección"
    direccion.setAttribute("type", "text");
    direccion.setAttribute("name", "direccion");
    direccion.setAttribute("placeholder", "Dirección");
    // añadimos la variable dirección al formulario
    formulario.appendChild(direccion);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // creamos la variable "teléfono" de tipo input
    var telefono = document.createElement("input");
    // creamos los atributos de la varibale "teléfono"
    telefono.setAttribute("type", "number");
    telefono.setAttribute("name", "telefono");
    telefono.setAttribute("placeholder", "Teléfono");
    // añadimos la variable "teléfono" al formulario
    formulario.appendChild(telefono);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // añadimos el formulario al contendor
    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}

// función para crear un salto de línea
function saltoLinea(formulario){
    var saltoDeLinea = document.createElement('br');

    // añadimos la función de salto de línea al formulario
    formulario.appendChild(saltoDeLinea);
}
    
// creamos función para selección de género
function crearButton(formulario){
    // creamos el texto "Selecciona una opción"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "Indica el género:";
    formulario.appendChild(seleccionaOpcion);

    // creamos la variable mujer para radio button
    var mujerText = document.createElement("label");
    mujerText.textContent = "Mujer";
    var mujerButton = document.createElement("input");
    mujerButton.setAttribute("type", "radio");
    mujerButton.setAttribute("name", "button");
    mujerButton.setAttribute("value", "m");
    mujerButton.setAttribute("id", "mujer");
    //combinamos la etiqueta text y el radio button "mujer"
    mujerText.appendChild(mujerButton);

    // creamos la variable hombre para radio button
    var hombreText = document.createElement("label");
    hombreText.textContent = "Hombre";
    var hombreButton = document.createElement("input");
    hombreButton.setAttribute("type", "radio");
    hombreButton.setAttribute("name", "button");
    hombreButton.setAttribute("value", "h");
    hombreButton.setAttribute("id", "hombre");
    //combinamos la etiqueta text y el radio button "hombre"
    hombreText.appendChild(hombreButton);

    // creamos la variable binario para radio button
    var binarioText = document.createElement("label");
    binarioText.textContent = "Binario";
    var binarioButton = document.createElement("input");
    binarioButton.setAttribute("type", "radio");
    binarioButton.setAttribute("name", "button");
    binarioButton.setAttribute("value", "b");
    binarioButton.setAttribute("id", "binario");
    //combinamos la etiqueta text y el radio button "binario"
    binarioText.appendChild(binarioButton);

    // creamos la variable otro para radio button
    var otroText = document.createElement("label");
    otroText.textContent = "Otro";
    var otroButton = document.createElement("input");
    otroButton.setAttribute("type","radio");
    otroButton.setAttribute("name", "button");
    otroButton.setAttribute("value", "o");
    otroButton.setAttribute("id","otro");
    //combinamos la etiqueta text y el radio button "otro"
    otroText.appendChild(otroButton);

    // añadimos los radios button al formulario
    formulario.appendChild(mujerText);
    formulario.appendChild(hombreText);
    formulario.appendChild(binarioText);
    formulario.appendChild(otroText);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // añadimos el formulario al contendor
    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}

// creamos función para selección de colores
function colorButton(formulario){
    // creamos el texto "Selecciona una opción"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "Indica tu color favorito:";
    formulario.appendChild(seleccionaOpcion);

    // creamos la variable azul
    var azulText = document.createElement("label");
    azulText.textContent = "Azul";
    var azulButton = document.createElement("input");
    azulButton.setAttribute("type", "radio");
    azulButton.setAttribute("name", "button");
    azulButton.setAttribute("value", "azul");
    azulButton.setAttribute("id", "azul");
    //combinamos la etiqueta text y el radio button "azul"
    azulText.appendChild(azulButton);

    // creamos la variable rojo
    var rojoText = document.createElement("label");
    rojoText.textContent = "Rojo";
    var rojoButton = document.createElement("input");
    rojoButton.setAttribute("type", "radio");
    rojoButton.setAttribute("name", "button");
    rojoButton.setAttribute("value", "rojo");
    rojoButton.setAttribute("id", "rojo");
    //combinamos la etiqueta text y el radio button "rojo"
    rojoText.appendChild(rojoButton);

    // creamos la variable amarillo
    var amarilloText = document.createElement("label");
    amarilloText.textContent = "Amarillo";
    var amarilloButton = document.createElement("input");
    amarilloButton.setAttribute("type", "radio");
    amarilloButton.setAttribute("name", "button");
    amarilloButton.setAttribute("value", "amarillo");
    amarilloButton.setAttribute("id", "amarillo");
    //combinamos la etiqueta text y el radio button "amarillo"
    amarilloText.appendChild(amarilloButton);

    // creamos la varibale verde
    var verdeText = document.createElement("label");
    verdeText.textContent = "Verde";
    var verdeButton = document.createElement("input");
    verdeButton.setAttribute("type","radio");
    verdeButton.setAttribute("name", "button");
    verdeButton.setAttribute("value", "verde");
    verdeButton.setAttribute("id","verde");
    //combinamos la etiqueta text y el radio button "verde"
    verdeText.appendChild(verdeButton);

    // añadimos los radios button al formulario
    formulario.appendChild(azulText);
    formulario.appendChild(rojoText);
    formulario.appendChild(amarilloText);
    formulario.appendChild(verdeText);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // añadimos el formulario al contendor
    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}

function crearCheckbok(formulario){
    // creamos el texto "Selecciona una opción"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "Selecciona las cualidades que te identifiquen:";
    formulario.appendChild(seleccionaOpcion);

    // creamos la variable "hábio de lectura" para ocpición de checkbox
    var checkboxText0 = document.createElement("label");
    checkboxText0.textContent = "Hábito de lectura";
    var checkbox0 = document.createElement("input");
    checkbox0.setAttribute("type", "checkbox");
    checkbox0.setAttribute("name", "tipo[]"); //podemos seleccionar varios checkbox
    checkbox0.setAttribute("value", "accion");
    checkbox0.setAttribute("id", "accion");
    checkboxText0.appendChild(checkbox0);

    // creamos la varible "constancia" para ocpición de checkbox
    var checkboxText1 = document.createElement("label");
    checkboxText1.textContent = "Constancia";
    var checkbox1 = document.createElement("input");
    checkbox1.setAttribute("type", "checkbox");
    checkbox1.setAttribute("name", "tipo[]"); //podemos seleccionar varios checkbox
    checkbox1.setAttribute("value", "accion");
    checkbox1.setAttribute("id", "accion");
    checkboxText1.appendChild(checkbox1);

    // creamos la varibale "responsabilidad" para ocpición de checkbox
    var checkboxText2 = document.createElement("label");
    checkboxText2.textContent = "Responsabilidad";
    var checkbox2 = document.createElement("input");
    checkbox2.setAttribute("type", "checkbox");
    checkbox2.setAttribute("name", "tipo[]"); //podemos seleccionar varios checkbox
    checkbox2.setAttribute("value", "accion");
    checkbox2.setAttribute("id", "accion");
    checkboxText2.appendChild(checkbox2);

    // creamos la varibale "habiliades sociales" para ocpición de checkbox
    var checkboxText3 = document.createElement("label");
    checkboxText3.textContent = "Habilidades sociales";
    var checkbox3 = document.createElement("input");
    checkbox3.setAttribute("type", "checkbox");
    checkbox3.setAttribute("name", "tipo[]"); //podemos seleccionar varios checkbox
    checkbox3.setAttribute("value", "accion");
    checkbox3.setAttribute("id", "accion");
    checkboxText3.appendChild(checkbox3);

    // creamos la varibale "motivación" para ocpición de checkbox
    var checkboxText4 = document.createElement("label");
    checkboxText4.textContent = "Motivación";
    var checkbox4 = document.createElement("input");
    checkbox4.setAttribute("type", "checkbox");
    checkbox4.setAttribute("name", "tipo[]"); //podemos seleccionar varios checkbox
    checkbox4.setAttribute("value", "accion");
    checkbox4.setAttribute("id", "accion");
    checkboxText4.appendChild(checkbox4);

    // añadimos los radios button al formulario
    formulario.appendChild(checkboxText0);
    formulario.appendChild(checkboxText1); // label-> añadimos al formulario
    formulario.appendChild(checkboxText2);
    formulario.appendChild(checkboxText3);
    formulario.appendChild(checkboxText4);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // añadimos el formulario al contendor
    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}

function crearImagen(formulario){
    // creamos la variable imagen1 de tipo "img"
    var imagen1 = document.createElement("img")  
    // cremaos los atributos de la imagen1
    imagen1.src="img/chica.png";
    imagen1.width="70";
    imagen1.height="80";

    // cramos la variable imagen2 de tipo "img"
    var imagen2= document.createElement("img");
    // cremaos los atributos de la imagen2
    imagen2.src="img/chico.png";
    imagen2.width="70";
    imagen2.height="80";

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    // creamos la variable contenedor
    var contenedor = document.getElementById("divHtml");
    //el usuario no va a interactuar con estos elementos, la metemos en el contenedor
    contenedor.appendChild(imagen1);
    contenedor.appendChild(imagen2);  
}

function textArea(formulario){
    // creamos el texto "Comentario"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "Escribe un comentario:";
    formulario.appendChild(seleccionaOpcion);

    var comentario = document.createElement("textarea");
    comentario.setAttribute ("id", "comentario");
    comentario.setAttribute("placeholder", "Escrite texto aquí");
    formulario.appendChild(comentario);

    // llamamos a la función para que haga un salto de línea
    saltoLinea(formulario);

    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}

function crearSelect(formulario){
    // creamos el texto "Selecciona una opción"
    var seleccionaOpcion = document.createElement("p");
    seleccionaOpcion.textContent = "Selecciona tu idioma:";
    formulario.appendChild(seleccionaOpcion);

    // creamos variable tipo "select"
    var selection = document.createElement("select");
    // creamos la primera variable dentro del tipo "select"
    var selection1 = document.createElement("option");
    selection1.text = "Español";
    selection1.value = "ES";
    // añadimos la primera opcción del select a la variable "selection"
    selection.appendChild(selection1);

    // creamos la segunda variable dentro del tipo "select"
    var selection2 = document.createElement("option");
    selection2.text = "Francés";
    selection2.value = "FR";
    // añadimos la segunda opcción del select a la variable "selection"
    selection.appendChild(selection2);

    // creamos la tercera variable dentro del tipo "select"
    var selection3 = document.createElement("option");
    selection3.text = "Alemán";
    selection3.value = "AL";
    // añadimos la tercera opcción del select a la variable "selection"
    selection.appendChild(selection3);

    // creamos la cuarta variable dentro del tipo "select"
    var selection4 =document.createElement("option");
    selection4.text = "Inglés";
    selection4.value = "IN";
    // añadimos la cuarta opcción del select a la variable "selection"
    selection.appendChild(selection4);

    //metemos la opcciones de select dentro del formulario
    formulario.appendChild(selection);

     // llamamos a la función para que haga un salto de línea
     saltoLinea(formulario);

    //y añadimos al contenedor
    var contenedor = document.getElementById("divHtml");
    contenedor.appendChild(formulario);
}