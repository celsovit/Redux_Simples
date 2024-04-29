import { legacy_createStore as createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numerosReducer'

// configura todos os reducers

const reducers = combineReducers({
    numeros: numerosReducer,
})

export default function storeConfig() {
    return createStore(reducers)
}