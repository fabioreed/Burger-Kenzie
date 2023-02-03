import React from 'react'
import Cart from '../Cart'
import ProductList from '../ProductList'
import { MainSection } from './style'

function Home({ menuList, setProducts, currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  return (
    <MainSection>
        <ProductList  setProducts={setProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} menuList={menuList} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal} /> 
    </MainSection>
  )
}

export default Home