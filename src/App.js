import React, { Component } from 'react'
import CicloDeActualizacion from './components/ciclo-actualizacion.js'
import CicloDeDesmontaje from './components/ciclo-desmontaje.js'

class App extends Component {
    render () {
        return(
            <div className="App">
                <CicloDeActualizacion />
                <CicloDeDesmontaje />
            </div>
        )
    }
}

export default App;