var div1 = document.getElementById('cargarTamaños');
var div2 = document.getElementById('cargarIngredientes');

var xmlHttp = new XMLHttpRequest();

xmlHttp.open('GET', 'datos.json', true);

xmlHttp.onreadystatechange = function () {
  if (xmlHttp.readyState == 4) {
    if (xmlHttp.status == 200) {
      var cargarTamaños = JSON.parse(xmlHttp.responseText);

      cargarTamaños.tamaños.forEach(function (tamaño) {
        var label = document.createElement('label');
        label.setAttribute('for', 'tamaño');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'tamaño';
        input.value = tamaño;
        label.appendChild(input);
        div1.appendChild(label);
      });

      cargarTamaños.ingredientes.forEach(function (ingrediente) {
        var label2 = document.createElement('label');
        label2.setAttribute('for', 'ingrediente');
        var input2 = document.createElement('input');
        input2.type = 'checkbox';
        input2.name = 'ingrediente';
        input2.value = ingrediente;
        label2.appendChild(input2);
        div2.appendChild(label2);
      });
    } else {
      alert("ZASCA!");
    }
  }
};

xmlHttp.send(null);