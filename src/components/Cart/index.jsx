import React from 'react'
import { CartProduct } from './CartProduct'
import CartTotal from './CartTotal'
import Empty from './Empty'
import { Container, ListCart } from './style'
import TitleCart from './TitleCart'


export function Cart({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  return (
    <Container>
      <TitleCart />
      <ListCart>
        {currentSale.length === 0 ? <Empty /> : <CartProduct currentSale={currentSale} setCurrentSale={setCurrentSale} />}
      </ListCart>
        {currentSale.length === 0 ? <></> : <CartTotal cartTotal={cartTotal} setCartTotal={setCartTotal} currentSale={currentSale} setCurrentSale={setCurrentSale} />}
    </Container>  
  )
}

export default Cart