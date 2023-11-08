var datosActuales = {
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    tamaño: '',
    ingredientes: []
}

document.getElementById('refreshButton').addEventListener('click', function() {
    var xmlHttp = new XMLHttpRequest()

    xmlHttp.open('GET', '/ruta/al/servidor', true)

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                var newData = JSON.parse(xmlHttp.responseText)

                if (huboCambios(newData)) {
                    actualizarInterfaz(newData)
                    datosActuales = newData
                    alert('Se han detectado cambios en los datos. Actualizando la interfaz de usuario.')
                } else {
                    alert('No se han detectado cambios en los datos.')
                }
            } else {
                console.error('Error en la solicitud al servidor')
                alert('Error al actualizar los datos. Por favor, inténtelo de nuevo más tarde.')
            }
        }
    }

    xmlHttp.send()
})

function huboCambios(newData) {
    if (newData.nombre !== datosActuales.nombre ||
        newData.apellidos !== datosActuales.apellidos ||
        newData.telefono !== datosActuales.telefono ||
        newData.email !== datosActuales.email ||
        newData.tamaño !== datosActuales.tamaño ||
        !arraysIguales(newData.ingredientes, datosActuales.ingredientes)) {
        return true
    }

    return false
}

function actualizarInterfaz(newData) {
    document.getElementById('nombre').value = newData.nombre
    document.getElementById('apellidos').value = newData.apellidos
    document.getElementById('telefono').value = newData.telefono
    document.getElementById('email').value = newData.email

    var radios = document.getElementsByName('tamaño')
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === newData.tamaño) {
            radios[i].checked = true
        }
    }

    var checkboxes = document.getElementsByName('ingredientes')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = newData.ingredientes.includes(checkboxes[i].value)
    }
}