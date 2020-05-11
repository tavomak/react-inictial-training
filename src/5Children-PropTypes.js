import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
    render() {
        return (
            <div
                style={{
                    border: '1px solid red',
                    margin: 5,
                    padding: 5
                }}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component {
    // La forma recomendada de usar propTypes es añadiendo la propiedad como estatica al componente
    static propTypes = {
        autor : PropTypes.string.isRequired
        //se recomienda utilizar antes del constructor
    }
    // Usando PropTypes es innecesaria esta validación:
    /* constructor(props) {
        super(props)
        if (typeof props.autor === 'undefined') {
            console.warn('El autor es una props requerida')
        }
    } */
    render() {
        const { autor, children, date, title } = this.props;
        return (
            <section>
                <h2>{title}</h2>
                {/* Expresión buleana que renderiza condicionalmente el componente */}
                {autor && <p>Escrito por: <em>{autor}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}
// Para usar los PropTypes se debe instalar como dependencia npm install props-types -SE
// Hay 2 formas de utilizarla:
//Opción 1 añadirla a la clase que se quiere comprobar.El valor será un objeto donde cada Key es la propiedad que se desea validar y el valor el tipo de dato al que pertenece
/* Article.propTypes = {
    autor : PropTypes.string
} */

class App extends Component {
    render() {
        return (
            <div className="App">
                <h4>Children props</h4>
                <Article
                    date={new Date().toString()}
                    title='Artículo sobre la propiedad Children de react'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
                    <p>
                        <strong>
                            Se mantienen las etiquetas y los componentes añadidos dentro.
                        </strong>
                    </p>
                </Article>
                <Article
                    autor='Lorena'
                    date={new Date().toString()}
                    title='Artículo DOS de la propiedad Children de react'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
                    <p>
                        <strong>
                            Se mantienen las etiquetas y los componentes añadidos dentro.
                        </strong>
                    </p>
                </Article>
                <Article
                    autor='Sebastián'
                    date={new Date().toString()}
                    title='Artículo TRES de la propiedad Children de react'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
                    <p>
                        <strong>
                            Se mantienen las etiquetas y los componentes añadidos dentro.
                        </strong>
                    </p>
                </Article>
            </div>

        );
    }
}

export default App;