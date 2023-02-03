import React, { useEffect } from 'react'
import { TotalContainer } from './style'

function CartTotal({ cartTotal, setCartTotal, currentSale, setCurrentSale }) {

  useEffect(() => {
      setCartTotal(currentSale.reduce((acc, current) => {
        return acc + current.price
      }, 0))
  }, [currentSale])

  function removeAll() {
    // volta a ser vazio
    setCurrentSale([])
  }

  return (
    <TotalContainer>
        <div>
          <p>Total</p>
          <span>R$ {cartTotal.toFixed(2)}</span>
        </div>
        <button onClick={removeAll}>Remover todos</button>
    </TotalContainer>
  )
}

export default CartTotal