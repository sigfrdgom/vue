var contenido = document.querySelector('#cuerpo-tabla');

document.querySelector('#boton').addEventListener('click',traer);
// document.querySelector('#boton').addEventListener('click',traer);

// Trae los datos del REST a traves de FETCH
function traer() {
    fetch('http://192.168.22.113/codeigniter/api/usuarios')
    .then(res => res.json())
    .then(datos => {
        fillTable(datos);
    })
}

function fillTable(datos) {

    contenido.innerHTML = '';

    for (let dato of datos) {
        contenido.innerHTML += 
            `
            <tr>
                <td><b>${dato.id}</b></td>
                <td>${dato.nombre}</td>
                <td>${dato.apellido}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminar(${dato.id})">Eliminar</button>
                    <button class="btn btn-warning" onclick="actualizar(${dato.id})">Editar</button>
                </td>
            </tr>
            `;
    }
 console.log('REST cargado')
}

function eliminar(id) {
    alert("Esta por eliminar el elemento con id: " +id);
}

function actualizar(id) {
    alert("Esta por actualizar el elemento con id: " +id);
}

// Trae los datos del REST a traves de AJAX
function ajax() {
    var http = new XMLHttpRequest();
    http.open('GET','http://192.168.22.113/codeigniter/api/usuarios',true);
    http.send();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            fillTable(datos);
        }
    }

}

