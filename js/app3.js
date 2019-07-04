document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            // Input nombre
            nombre: '',
            apellido: '',
          
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            apellidoActualizar: '',
            
            // Lista de usuarios
            usuarios: [] ,
        },
        methods: {
            crearUsuario: function () {
                // Anyadimos a nuestra lista
                    this.usuarios.push({
                    id: + Math.floor(Math.random() * (10000 - 0)) + 0,
                    nombre: this.nombre,
                    apellido:this.apellido,
                   
                });
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.apellido='';
            },
            verFormActualizar: function (paciente_id) {
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = paciente_id;
                this.nombreActualizar = this.usuarios[paciente_id].nombre;
                this.apellidoActualizar = this.usuarios[paciente_id].apellido;
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarUsuario: function (paciente_id) {
                // Borramos de la lista
                this.usuarios.splice(paciente_id, 1);
            },
            guardarActualizacion: function (paciente_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.usuarios[paciente_id].nombre = this.nombreActualizar;
                this.usuarios[paciente_id].apellido = this.apellidoActualizar;
            }
        }
    });
});