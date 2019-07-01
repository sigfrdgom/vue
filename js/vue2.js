const app = new Vue({
    // Para definir el contenedor que usaremos
    el: '#app',
    // Espacio para integrar la data de la aplicacion
    data:{
        // Dentro de esta seccion podemos ingresar los datos que utilizaremos en la aplicacion
        titulo: 'Una vista realizada con VUE.js',
        arreglo: [
            {nombre: 'pera', cantidad:10},
            {nombre: 'manzana', cantidad:23},
            {nombre: 'uva', cantidad:197},
            {nombre: 'platano', cantidad:67},
            {nombre: 'naranja', cantidad:56}
        ],
        // Inicializar los elementos del v-model
        nuevaFruta: '',
        total: 0,
    }, 
    methods: {
        // Para crear los metodos dentro del arcihvo vue
        agregarFruta(){
            this.arreglo.push({
                nombre: this.nuevaFruta, cantidad: 0 
            });
            // Reasignandi valores al v-model
            this.nuevaFruta= '';
        },
        otroMetodo(){

        }
    },
    computed: {
        // Para crear algunos metodo computados en vue
        sumarFrutas(){
            this.total = 0;
            for (let item of this.arreglo) {
                this.total = this.total + item.cantidad
            }
        return this.total;
        }
    },
})
// conexion entre elementos del html al js


//  Uso de keymodifiers