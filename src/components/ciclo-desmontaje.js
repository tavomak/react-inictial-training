import React, { Component } from 'react'

class ButtonQueLanzaError extends Component {
    state = { throwError: false }

    render() {
        console.log(this.state.throwError);
        if (this.state.throwError) {
            throw new Error('Error Lanzado por el botón')
        }
        return (
            <button onClick={() => this.setState({ throwError: true })}>Lanzar error</button>
        )
    }
}

class ComponentDidCatch extends Component {
    state = { hasError: false, errorMsg: '' }
    componentDidCatch(error, erroInfo) {
        console.log('ComponentDidCatch')
        console.log({ error, erroInfo })
        this.setState({ hasError : true , errorMsg : error.toString() })
    }
    render() {
        console.log(this.state.hasError);
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({hasError:false})}> Volver a la aplicación</button>
                </div>
            )
        }
        return (
            <div>
                <h4>Ciclo de Error</h4>
                <ButtonQueLanzaError />
            </div>
        )
    }

}

export default ComponentDidCatch;