const app = new Vue({
  
  el: '#app',
  data:{
    titulo: 'Lista de tareas con Vue.JS',
    tareas: [],
    nuevaTareaNombre: '',
    nuevaTareaTiempo: ''
  },methods: {
    agregarTarea: function(){
      this.tareas.push({
        nombre: this.nuevaTareaNombre,
        tiempo: this.nuevaTareaTiempo,
        estado: false
      });
      this.nuevaTareaNombre = '';
      this.nuevaTareaTiempo = '';
      localStorage.setItem('dbtareas', JSON.stringify(this.tareas));
    },
    editarTarea: function(index){
      this.tareas[index].estado=true;
      localStorage.setItem('dbtareas', JSON.stringify(this.tareas));
    },
    eliminarTarea: function (index) {
      this.tareas.splice(index,1);
      localStorage.setItem('dbtareas',JSON.stringify(this.tareas));
    }
  },
  created: function () {
    let dblocal = JSON.parse(localStorage.getItem('dbtareas'));
    if (dblocal === null) {
      this.tareas = [];
    } else {
      this.tareas = dblocal;
    }
  }

})