const intialState = {
    text: 'Hello',
    number:0
}

export const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'HELLO':
            return {
                ...state, text: action.payload
            }
        case 'INCREMENT':
            return{
                ...state, number:state.number+1
            }
        default:
            return state
    }
}