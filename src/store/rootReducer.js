import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import { mainReducer} from './mainReducer'
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    mainReducer
})
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools))

export default store

