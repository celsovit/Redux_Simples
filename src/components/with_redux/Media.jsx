import React from 'react'

import Card from './Card'

export default function Media(props) {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ 10 }</strong>
                </span>
            </div>
        </Card>
    )
}