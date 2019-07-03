const app = new Vue({

    el:'#app',
    data:{
        titulo: 'Lista de tareas con VUE.js',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
      agregarTarea: function() {
        // Para agregar una nueva tarea
        console.log("Diste cliks", this.nuevaTareaNombre, this.nuevaTareaTiempo);
        this.tareas.push({
            nombre: this.nuevaTareaNombre,
            tiempo: this.nuevaTareaTiempo,
            estado: false
        });
        console.log(this.tareas);
        this.nuevaTareaNombre = '';
        this.nuevaTareaTiempo = '';
        // agregar a la db local
        localStorage.setItem('dbtareas', JSON.stringify(this.tareas));
      },

      editarTarea: function(index){
        // Para editar una tarea
        this.tareas[index].estado=true;
        // Para agregar a la bd
        localStorage.setItem('dbtareas', JSON.stringify(this.tareas));
      },

      eliminarTarea: function(index){
        //  Para eliminar una tarea
        this.tareas.splice(index, 1);
        // Para agregar a la bd
        localStorage.setItem('dbtareas', JSON.stringify(this.tareas));
      }
      
    },
    // Invocado al terminar la cargas
    created: function(){
        let dblocal = JSON.parse(localStorage.getItem('dbtareas'));
        console.log("---------------"+dblocal);
        if (dblocal === null) {
            this.tareas = [];
        } else {
            this.tareas = dblocal;
        }
    }

});