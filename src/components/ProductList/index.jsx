import React from 'react'
import Product from './Product'
import { StyledList } from './style'

function ProductList({ menuList, setProducts, currentSale, setCurrentSale }) {

  return (
        <StyledList>
        {menuList.map(food => (

          <Product key={food.id}
            food={food}
            menuList={menuList}
            setProducts={setProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        ))}
      </StyledList>
    
    
  )
}

export default ProductList