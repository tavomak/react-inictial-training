import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Tipos de renderizado, se recomienda usar Clases ======================================= //

/*function Hello (props) {
   return <h2>{props.title}</h2>
}*/

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
    render() {
        return <h2>{this.props.title}</h2>;
    }

}
//Valores por defecto de las Props =============================================== //
//si la propiedad tiene asignada una propiedad se reemplaza la por defecto: 
Hello.defaultProps = {
    title: 'Bienvenidos (texto por defecto)'
}

// Tipos de Propiedades disponibels (string, number, bool, array, object, otras props) ============================================== //
class Text extends Component {
    render() {
        // Detructuración del this.props para simplificar el acceso a las props
        const {
            arrayOfNumbers,
            multiplyN,
            boolean,
            number,
            text,
            title,
            objectForTest

        } = this.props;

        const textoBool = boolean ? "Verdadero <3" : "falso";
        const mapOfNumber = arrayOfNumbers.map(n => n * 2);
        const mapMultiplyFunction = arrayOfNumbers.map(multiplyN);

        return (
            <div>
                {/* Sin la destructuración el componente debe llamar a this.prop<p>{this.props.text}</p> */}
                <p>{text}</p>
                <p>{number}</p>
                <p>{textoBool}</p>
                <p>{arrayOfNumbers.join(' - ')}</p>
                <p>{mapOfNumber.join(' - ')}</p>
                <p>{objectForTest.key}</p>
                <p>{mapMultiplyFunction.join(' x ')}</p>
                {title}
            </div>
        )
    }

}

// State ============================================== //
class Contador extends Component {
    // Inicializar el Stare con Class Fields
    /* state = {contador: 2}; */
    // Inicializar el STATE en el Constructor
    constructor(props) {
        super(props);
        console.log(this.props.contadorInicial);
        this.state = { contador: this.props.contadorInicial } // Cuando se usa un constructor personalizado se debe pasar como parametro del constructor las props
        // Cambiar el estado 
        // 1-. Debe ser tratado como información inmutable
        // 2-. Solo se puede modificar usando el metodo setState()
        // 3-. es asincrono
        setInterval(() => {
            this.setState({ //Modifica el estado de un componente pasando como paramentro un objeto. Es un metodo Asíncrono
                contador: this.state.contador + 1
            })
        }, 1000)
    }

    render() {
        //const contador = 0;
        //return <span>{this.state.contador}</span>
        return <ContadorHijo numero={this.state.contador} />
    }

}
// Default Props para Contador
Contador.defaultProps = {
    contadorInicial: 11
}

class ContadorHijo extends Component {
    render() {
        //console.log(this.props.numero);
        return <span style={{ color: "red" }}>{this.props.numero}</span>
    }
}

// Renderizado de componentes de la aplicación ============== //
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Hello />
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Aprendiendo React
        </a>
            </header>
            <main>
                <Text
                    arrayOfNumbers={[7, 3, 4]}
                    multiplyN={x => x * 4}
                    boolean
                    number={2}
                    text="Texto del párrafo"
                    title={<h3>Esto es una propiedad</h3>}
                    objectForTest={{
                        key: 'Value 1',
                        key2: 'Value 2',
                        key3: 'Value 3'
                    }}
                />
            </main>
            <div className="contador">
                <span >contador = </span>
                <Contador contadorInicial={100} />
            </div>
        </div>
    )
}

export default App;