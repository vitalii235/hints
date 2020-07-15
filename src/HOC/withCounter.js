import React, { Component } from 'react'

const withCounter = (OriginalComponent, name) => {
    class NewComponent extends Component {
        state = {
            count: 0,
            name: 'NATALIA'
        }
        increment = () => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }
        render() {
            const { count } = this.state
            return <OriginalComponent
                increment={this.increment}>
                `{name} clicked {count} раз`
                </OriginalComponent>
        }

    }
    return NewComponent
}

export default withCounter