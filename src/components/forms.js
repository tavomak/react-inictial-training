import React, { Component } from "react";

export default class Froms extends Component {
    // STATE INICIAL DONDE SE GUARDAN TODOS LOS DATOS DEL FORM
    constructor () {
        super();
        this.state = {
            inputName : '',
            inputTwitter : '@',
            inputAceptar : true
            
        }
    }

    //El evento click se sustituye en el ejercicio por el submit por razones pedagogicas
    handleClick = (e) => {
        e.preventDefault();
        console.log(this);
        /* Opción 1 para recuperar datos de formulario. Esta no es la forma recomendada de hacerlo
        const name = document.getElementById('userName').value,
        twitter = document.getElementById('twitter').value;*/

        // PROP REF Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
        // REF sirve para recuperar la referencia del elemento en el dom (document.getElementById() o $('#'))
        const name = this.inputName.value,
        twitter = this.inputTwitter.value;
        console.log({name , twitter})
    }

    // Controlar evento onSumit
    handledSbmit = (e) => {
        e.preventDefault();
        
        /*
        const name = this.inputName.value,
        twitter = this.inputTwitter.value;
        console.log({name , twitter})
        */
        // Ya que ahora la información se guarda en el state recojer los datos manualmente deja de tener sentido
        
        // Opcion 2 RECUPERAR LOS DATOS DESDE EL STATE. Esta es la forma recomendade de obtener los datos de los formularios
        console.log(this.state)
    }

    hadledChange = (e) => {
        console.log(e.target.checked);
        this.setState({ inputAceptar : e.target.checked})
    }

    render () {
        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handledSbmit}>
                    <p>
                        <label htmlFor='userName'>Nombre: </label>
                        <input
                            id="userName"
                            name="userName"
                            placeholder="Introduce tu nombre"
                            // Tampoco es la forma mas correcta de seleccionar o referenciar formularios
                            //CIN REF RECUPERAMOS LA INSTANCIA DEL ELEMENTO EN EL DOM
                            ref={
                                inputElement => this.inputName = inputElement
                            }
                            // ya que el STATE es inmutable, al indicar un value hemos hecho que estos elementos pasen de tipo descontrolado a controlado, lo que nos obliga a cambiar los estados de forma manual
                            // Para solucionarlo debemos agragar una prop onCnage para cambiar el state con los nuevos datos
                            value={
                                this.state.inputName
                            }
                            // Si la propiedad onChange ya tiene una funcion, agregar el SetState a dicha funcion o metodo
                            onChange={
                                e => this.setState({ inputName : e.target.value })
                            }
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id="twitter"
                            name="twitter"
                            placeholder="Introduce tu Twitter"
                            ref={
                                inputElement => this.inputTwitter = inputElement
                            }
                            value={
                                this.state.inputTwitter
                            }
                            onChange={
                                e => this.setState({ inputTwitter : e.target.value })
                            }
                        />
                    </p>
                    <p>
                        <label htmlFor="inputAceptar">Aceptar</label>
                        <input 
                        type="checkbox"
                        name="inputAceptar"
                        id="inputAceptar"
                        onChange={this.hadledChange}
                        checked={this.state.inputAceptar}
                        />
                    </p>
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}
