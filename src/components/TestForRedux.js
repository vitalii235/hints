import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainAction, increment } from '../store/mainAction';
import styled from 'styled-components';
import { BoxStyle } from '../styled/styled';

class TestForRedux extends Component {
    state = {
        count: 0
    }
    render() {
        const { count } = this.state

        const Title = styled.h2`
        color:${props => props.test ? 'green' : props.a ? 'yellow' : 'red'};
        text-align:center
        `
        const Data = styled.div`
        text-align:center;
        font-size:30px
        `
        const ButtonStyle = styled.button`
        display:block;
        color:pink
        `
        const { text, mainAction, number, increment } = this.props
        return (
            <div>
                <BoxStyle>
                    <Title test>THIS IS CLASS COMPONENT</Title>
                    <ButtonStyle onClick={() => mainAction('this is new text')}>Click here</ButtonStyle>
                    {text}
                    <div>
                        <ButtonStyle onClick={increment}>increment</ButtonStyle>
                        <div>
                            {number}
                        </div>
                    </div>
                    <div>
                    </div>
                </BoxStyle>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        text: state.mainReducer.text,
        number: state.mainReducer.number,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        mainAction: (text) => dispatch(mainAction(text)),
        increment: () => dispatch(increment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestForRedux)
