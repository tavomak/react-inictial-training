import React, { Component } from 'react'
//import React, { Component, PureComponent } from 'react'
// PURE componente hace una comparacion superficial y determina si se debe renderizar d e nuevo o no
// se debe utilizar siempre que se pueda
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq'
},
    ANIMAL_LIST = Object.keys(ANIMAL_IMAGES);
//Para evitar realizar operaciones en el metodo render como buena práctica se  

// Según la prop que recibe de ANIMAL_IMAGES se mostrara una imagen o otra
class AnimalImage extends Component {
    //Se guarda el souce de la imagen que corresponde inicialmente, recuperada de la constante Animal_Images
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps(nextProps) {
        //Se va a ejecutar siempre que le lleguen props aunque la prop sea identica a la actual
        console.log('1. componentWillReceiveProps()');
        console.log(nextProps.animal)
        console.log(ANIMAL_IMAGES[nextProps.animal])

        // Para evitar setear el estado con nu valor identico
        /* if (this.props.animal !== nextProps.animal) {
            this.setState({src : ANIMAL_IMAGES[nextProps.animal]})
        } */
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
        // Normalmente no provoca un renderizado extra cuando se invoca
    }
    // PURE COMPONENT SOLO SE DEBE USAR CON PROPS Y STATE SIMPLES, SOLO SE DEBE USAR ESTE METODO CUANDO LAS PROPS SON OBJETOS COMPLEJOS
    shouldComponentUpdate(nextProps) {
        console.log('2. ShouldComponent ');
        console.log('ActualProps: ', this.props.animal);
        console.log('NextProps: ', nextProps.animal);

        return this.props.animal !== nextProps.animal
        //return true
        // Siempre se debe devolver el booleano, si el metodo no existe por defecto se devuelve el true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('3. ComponentWillUpdate: ', nextProps, nextState);
        const img = document.querySelector('img');
        console.log({alt: img.alt})

        img.animate([
            {
                filter: 'blur(0px)'
            },
            {
                filter: 'blur(8px)'
            }
        ], {
            duration: 500,
            easing: 'ease'
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('4. componentDidUpdate: ', prevProps, prevState);
        const img = document.querySelector('img');
        console.log({alt: img.alt})

        img.animate([
            {
                filter: 'blur(8px)'
            },
            {
                filter: 'blur(0px)'
            }
        ], {
            duration: 500,
            easing: 'ease'
        })
    }

    render() {
        console.log('-> render()');
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    src={this.state.src}
                    alt={this.props.animal}
                    width="250"
                />
            </div>
        )
    }
}

// Comprobación de propiedades Esto viene de la libreria declarada en la linea dos
AnimalImage.propTypes = {
    // LA prop animal puede ser una de los elementos del array
    animal: PropTypes.oneOf(ANIMAL_LIST)
}

//Se debe setear una prop inicial o por defecto para que el componente no genere un error
AnimalImage.defaultProps = {
    animal: 'panda'
}
// A este punto no tienen sentido tener una prop por default ya que siempre se le pasa desde el state

class CicloDeActualizacion extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = animal => {
        // La referencia a this es el contexto superior por eso el metodo debe ser una arrow function
        return (
            <button
                //con una comprobacion se desabilita el boton del animal seleccionado
                //disabled={animal === this.state.animal} //Desabilitado para explicar el shouldComponentUpdate
                key={animal}
                onClick={() => this.setState({ animal })}
            >
                {animal}
            </button>
        )
    }

    render() {
        return (
            <div>
                <h4>Ciclo de actualización, Ejemplo de: ComponentWillReciveProps(nextProps)</h4>
                <AnimalImage animal={this.state.animal} />
                {ANIMAL_LIST.map(this._renderAnimalButton)}
            </div>
        )
    }
}

export default CicloDeActualizacion;