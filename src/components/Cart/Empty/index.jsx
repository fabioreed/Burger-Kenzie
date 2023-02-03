import React from 'react'
import { EmptyCart } from './style'

function Empty() {
  return (
    <EmptyCart>
        <h2>Sua sacola está vazia</h2>
        <p>Adicione itens</p>
    </EmptyCart>
  )
}

export default Empty