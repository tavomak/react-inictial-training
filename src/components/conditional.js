import React, { Component } from 'react'
import cars from '../data/cars.json'

class ComponenteA extends Component {
    render () {
        return (
            <p>Componente A</p>
        )
    }
}

class ComponenteB extends Component {
    render () {
        return (
            <p>Componente B</p>
        )
    }
}

/* function useConditionalRendering(mostrarA) {
    if (mostrarA){
        return <ComponenteA />
    }

    return <ComponenteB />

} */

class ListOfNumbers extends Component {
    render () {
        const numbers = [1,1,2,3,4,5];

        return (
            numbers.map((v,i) => {
                console.log(v);
                return <p key={i}>{v}</p>
            })
        )
    }
}

class Caritem extends Component{
    render () {
        const {car} = this.props

        return (
            <li>
                <p><b>Nombre:</b> {car.name}</p>
                <p><b>MArca:</b> {car.company}</p>
            </li>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { mostrarA : true}
    }
    render () {
        //const useConditionalComponent = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />
        return(
            <div>
                <h4>Conditional rendering</h4>
                {/* <ComponenteA />
                <ComponenteB /> */}
                {/* //V1 usando función {useConditionalComponent} */}
                {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
                <ListOfNumbers />
                {/* <ul>
                    {
                        cars.map(car => {
                            return (
                                <li key={car}>
                                    <p><b>Nombre:</b> {car.name}</p>
                                    <p><b>MArca:</b> {car.company}</p>
                                </li>
                            )
                        })
                    }
                </ul> */}
                {
                    cars.map(car => {
                        return <Caritem  key={car.id} car={ car } />
                    })
                }
            </div>
        )
    }
}