import React from 'react'

import Card from './Card'

const numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default function Sorteio(props) {
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ 10 }</strong>
                </span>
            </div>
        </Card>
    )
}