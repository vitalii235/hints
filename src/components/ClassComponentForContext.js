import React, { Component } from 'react'
import styled from 'styled-components'
import UserContext, { UserConsumer } from '../context/Context'


export default class ClassComponentForContext extends Component {
    static contextType = UserContext
    componentDidMount() {
        const user = this.context
    }
    render() {
        const Title = styled.h1`
            color:'blue';
            text-align:center;
            fontWeight:500
        `

        return (
            <UserConsumer>
                {(props) => {
                    return (
                        <div>
                            {props.name}
                        </div>
                    )
                }}
                {/* <Title>
                        This is Context component
            </Title> */}
            </UserConsumer>

        )
    }
}
