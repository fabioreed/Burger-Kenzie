import React from 'react'
import { StyledInputSearch } from './style'

function InputSearch({ filteredProducts, setFilteredProducts }) {

  // console.log(filteredProducts)
  // console.log(searchMenuList())

  const submit = (e) => {
    e.preventDefault()

    setFilteredProducts(filteredProducts)
  }

  return (
    <StyledInputSearch onSubmit={submit}>
        <input
          type="text" placeholder='Digite aqui' value={filteredProducts} onChange={(e) => setFilteredProducts(e.target.value)}
        />
        <button type='submit'>Pesquisar</button>
    </StyledInputSearch>
  )
}

export default InputSearch