import React, { Component } from 'react'
import withCounter from './withCounter'

class HocTest extends Component {
    render() {
        const {children, increment}= this.props
        return (
            <div>
                <h3>{children}</h3>
                <button onClick={increment}>increment number</button>
            </div>
        )
    }
}
export default withCounter(HocTest, 'Natalia') 