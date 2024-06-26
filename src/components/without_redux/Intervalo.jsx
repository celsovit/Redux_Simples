import React from 'react'

import Card from '../Card'
import '../Intervalo.css'

export default function Intervalo(props) {

    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={ min } 
                        onChange={ e => props.onMinChanged(+e.target.value) } 
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={ max } 
                        onChange={ e => props.onMaxChanged(+e.target.value) } 
                    />
                </span>
            </div>
        </Card>
    )
}