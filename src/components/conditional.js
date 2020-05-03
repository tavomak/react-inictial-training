import React, { Component } from 'react'

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

export default class ConditionalSection extends Component {
    render () {
        return(
            <div>
                <h4>Conditional rendering</h4>
                <ComponenteA />
                <ComponenteB />
            </div>
        )
    }
}