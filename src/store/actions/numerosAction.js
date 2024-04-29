import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes"

// Action Creator (função síncrona)
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,   // nome da action (nome que quiser)
        payload: novoNumero
    }
}

// Action Creator (função síncrona)
export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,   // nome da action (nome que quiser)
        payload: novoNumero
    }
}
