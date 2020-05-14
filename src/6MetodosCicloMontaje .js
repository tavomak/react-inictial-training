import React, { Component } from 'react';
import FetchComponent from './components/fetch-component.js';

class App extends Component {
    //Aunque no se vea en el código exsiste un método constructor por defecto para esta clase
    // si no se utiliza llama al constructor de la clase que extiende utilizando el metodo super
    constructor (props) {
        console.log('Ejecutado constructor')
        super (props) // Este método super() llama al constructor del componente es importante que como parametro tenga las mismas props que el constructor
        // Este constructor inicializa el estado inicial de este componente
        this.state = { 
            mensajeInicial: 'Mensaje inicial',
            
            scroll: 0
        }
        // Se asigna un obje to con todas las variables que se quieran guardar en el state del componente
        //Puede ser util en los metodos que manejan eventos para enlazar el contexto this correcto 
        // Se Bindea el contexto this al listener con el método bind(), este devuelve el listener enlazado con el this de donde se ejecuta bind() o el this que se pasa como parametro
        this.handleClick = this.handleClick.bind(this)
        //debugger
    }

    componentWillMount () {
        console.log('component Will Mount')
        //debugger
        this.setState({ mensajeInicial: 'Mensaje inicial Modificado' })
        // Actualizar el state aca no genera otro renderizado
    }

    componentDidMount () {
        console.log('Component Did Mount');
        //debugger

        // Si se actualiza el state por defecto react actualiza el componente ejecutando el metodo render
        //document.addEventListener('mousemove', e => console.log(e.clientX , e.clientY))

        document.addEventListener('scroll', e => {
            // Lo ideal es usar arrow para no tener problemas de bindeo
            this.setState({scroll:window.scrollY})
            // React no desmonta las interacciones con el DOM por lo que se deben desmontar en Component will unmount
        })

        // En este metodo el DOM está listo y es acá donde debemos suscribirnos a los eventos del dom como el scroll o cargar datos externos
    }
    // MÉTODOS Internos ====================================== //

    handleClick() {
        // Para cambiar el state del componente this debe ser el componente no el metodo ejecutaddo al hacer click
        this.setState({ mensajeInicial: "Mensaje actualizado desde bindeo en el constructor" })
    }
    // Utilizando una arrow function en el metodo que cambia el estado del componente el contexto de this dentro de una arrow function se define en un “ámbito léxico”. (Es decir, toman el this de su entorno, por lo que ya no necesita bind() o crear una const that = this.) resolve(data)
    handleClick2 = e => {
        this.setState({ mensajeInicial: "Mensaje actualizado desde arrow function" })
    }
    // FIN de los MÉTODOS Internos ====================================== //

    /* Como buena práctica el orden de los metos son
    1-. Constructor

    2-. Métodos del Ciclo de Montaje

    3-. Metodos Internos

    4- Siempre último el método render() */

    render() {
        //El método render es el único obligatorio para que nuestros componentes puedan funcionar
        // Al ser el ciclo de montaje los props a las que podrá acceder serán las primeras que le llegan
        // El state que usará es el que le llega desde el constructor o el metodo componentWillMount()
        // Crea la primera representación en pantalla del componente
        // El componente debe se puro, no debe modificar el state() del componente interactuar con componentes del DOM 
        console.log('Ejeutado Render')
        //debugger
        return (
            // Evitar usar operaciones acá porque afectará el performance
            // El render puede retornar layouts complejos, numeros, styled components <Modal /> o mezclas entre ellos
            <div className="App">
                <h4>Ciclo de montaje: Constructor</h4>
                {
                    // El state inicializado en el constructor se evalua para ser mostrado en pantalla
                    this.state.mensajeInicial
                }
                <div>
                    <button onClick={this.handleClick}>Regular Function Bind</button>
                </div>
                <div>
                    <button onClick={this.handleClick2}>Arrow Function Bind</button>
                </div>
                <div>{this.state.scroll}</div>
                <FetchComponent/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero congue, lacinia ipsum vel, elementum nisi. Morbi neque velit, mattis quis luctus vel, mollis ac enim. Integer ante arcu, faucibus id justo id, sagittis vulputate nisl. In libero metus, hendrerit nec velit nec, semper pretium libero. Fusce vehicula orci massa, id molestie purus porta in. Curabitur elementum mi mi. In rhoncus congue nunc, eu ornare tellus malesuada viverra. Pellentesque imperdiet eros nisl, in pharetra ipsum posuere maximus. Sed ut tristique magna, quis facilisis ligula. Vestibulum fermentum quis nulla vehicula bibendum. Nulla facilisi. Nulla sed nisi ac lacus tincidunt ultrices. Etiam ultrices purus urna, ac tristique quam luctus et. Integer feugiat pulvinar nunc, ac auctor lectus lacinia non. <br/> Nam sit amet convallis metus. Praesent malesuada mauris volutpat tellus ultrices auctor. Quisque ut viverra neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent luctus ultricies ante vitae molestie. Praesent faucibus ex sed nunc porttitor ultricies. Fusce non gravida massa. Aenean fermentum posuere ultrices. Morbi accumsan risus vitae erat porttitor, cursus blandit tellus sodales. Aliquam quis sagittis mi, id viverra ipsum. Aliquam lorem ipsum, finibus ornare velit quis, sodales dapibus quam.
                </p>
            </div>
            //En ocasiones se retorna un null para que no se renderize nada, esto es util para ocupar de manejar eventos del dom como sclorl o eventos de tracking

            // Tambien una practica comun es el renderizado condicional dependiendo de las props que les llega o el state
            // ejemplo: return this.state.mensaje === "mensaje inicial" ? "mensaje inicial" : null

            //Se puede renderizar fracmentos que son elementos de un array. Hay veces que hay que envolver los elementos en un div vacío para poder incluir varios elementos más
        );
    }

}

export default App;