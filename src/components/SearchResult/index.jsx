import React from 'react'
import { ResultSearch } from './style'


function SearchResult({ filteredProducts, setFilteredProducts}) {

  return (
      <ResultSearch>
        <h3>Resultado de busca: <span>{filteredProducts}</span></h3>
        <button onClick={() => setFilteredProducts('')}>Limpar Busca</button>
      </ResultSearch>    
  )
}

export default SearchResult