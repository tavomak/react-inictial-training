import React, { Component } from 'react';

class App extends Component {

    constructor (props) {
        super(props)
        this.state = { mouseX : 0, mouseY: 0 }
        // Opción 1 NO TAN RECOMPENDABLE Se debe enlazar el metodo que controla al evento en el constructor usando el metodo bind
        // this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // Opción 2 enlazar el contenxo con un arrow function ya que las arrow mantienen el contexto desde donde se declaran

    }
    // Meodo que controla el evento onMouseMove
    // OPCION 1 linea 7 handleMouseMove2 (e) {
    // Opción 2 crear el evento con una arrow agregando = (e) =>
    handleMouseMove = (e) => {
        const { clientX, clientY } = e ;
        this.setState({ mouseX : clientX, mouseY : clientY })
        // El contexto se ejecuta en respuesta al navegador
        // Se debe enlazar el metodo que controla al evento en el constructor usando el metodo bind
    }

    // OLVIDAR ENLAZAR EL THIS EN LOS METODOS QUE CONTROLAN EVENTOS ES UN ERROR MUY COMÚN
    handleClick (e) {
        // Los eventos en react devuelven un evento especial syntetic Event (https://es.reactjs.org/docs/events.html) es un contenedor agnóstico al navegador alrededor del evento nativo del navegador. Tiene la misma interfaz que el evento nativo del navegador, incluyendo stopPropagation() y preventDefault(), excepto que los eventos funcionan de manera idéntica en todos los navegadores. 
        console.log(e);
        // Para acceder al evento original (API del navegador) de necesitarse
        console.log(e.nativeEvent);

        // IMPORTANTE Esto deveve undefined porque apunta a un this que es la misma función, de sebe bindear en el constructor del state
        console.log(this); 


    }

    render () {
        return(
            <div className="App">
                <h4>Eventos</h4>
                <button onClick={this.handleClick}>click</button>
                <div
                //se agrega el evento y se le pasa como valor el manejador creado
                onMouseMove={this.handleMouseMove}
                style={{
                    border : '1px solid red',
                    marginTop : 10,
                    padding : 10
                }}>
                <p>{this.state.mouseX}, {this.state.mouseY}</p>
                </div>
            </div>

        );
    }
}

export default App;