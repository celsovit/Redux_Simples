import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../../store/actions/numerosAction'

import '../Intervalo.css'

function Intervalo(props) {

    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={ min } 
                        onChange={ e => props.alterarMinimo(+e.target.value) }
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={ max } 
                        onChange={ e => props.alterarMaximo(+e.target.value) }
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // action creator que sempre retorna uma action

            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action) // action será passada para todos os reducers
        },
        alterarMaximo(novoNumero) {
            // action creator que sempre retorna uma action

            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action) // action será passada para todos os reducers
        }
    }
}

/* 
    Outras formas de criar a função mapDispatchToProps
*/

// function mapDispatchToProps_2(dispatch) {
//     return {
//         alterarMinimo: novoNumero => dispatch(alterarNumeroMinimo(novoNumero)),
//         alterarMaximo: novoNumero => dispatch(alterarNumeroMaximo(novoNumero))
//     }
// }

// function mapDispatchToProps_3(dispatch) {
//     return {
//         alterarMinimo: function(novoNumero) {
//             dispatch(alterarNumeroMinimo(novoNumero))
//         },
//         alterarMaximo: function(novoNumero) {
//             dispatch(alterarNumeroMaximo(novoNumero))
//         }
//     }
// }

// const mapDispatchToProps_4 = dispatch => ({
//         alterarMinimo: novoNumero => dispatch(alterarNumeroMinimo(novoNumero)),
//         alterarMaximo: novoNumero => dispatch(alterarNumeroMaximo(novoNumero))
// })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)