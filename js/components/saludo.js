Vue.component('saludo',{
    template: `
    <div>   
        <h1>{{ saludo }}</h1>
        <h2>Hola mundo </h2>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola desde vue'
        }
    },
})
