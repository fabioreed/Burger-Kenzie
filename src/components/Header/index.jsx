import React from 'react'
import InputSearch from './InputSearch'
import { Logo } from './Logo'
import { StyledHeader } from './style'

function Header({ filteredProducts, setFilteredProducts }) {
  return (
    <StyledHeader>
        <Logo />
        <InputSearch filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
    </StyledHeader>
  )
}

export default Header