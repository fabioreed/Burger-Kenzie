import React from 'react'
import { Card } from './style'
import { toast } from 'react-toastify'

function Product({ food, currentSale, setCurrentSale }) {

  function handleClick(e) { 
    const res = currentSale.find(product =>  product.id === Number(e.target.id))
      if (res == undefined) {
          setCurrentSale([...currentSale, food])
          toast.success('Adicionado!')
      } else {
          toast.warning('Produto já adicionado no carrinho!')
      }
  }
 
  return (
    <Card>
        <figure>
            <img src={food.img} alt={food.name} />
        </figure>
        <div>
            <h3>{food.name}</h3>
            <span>{food.category}</span>
            <p>R$ {food.price.toFixed(2)}</p>
            <button id={food.id} onClick={(e) => handleClick(e)}>Adicionar</button>
        </div>
    </Card>
  )
}

export default Product

//Obs: find do products pro produto que quero add (e.target.id) - setCurrentSale app spread currentSale + product (resultado do find -