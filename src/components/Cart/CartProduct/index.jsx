import React from 'react'
import { LittleCard } from './style'
import { toast } from 'react-toastify'

export function CartProduct({ currentSale, setCurrentSale }) {

  function deleteProduct(idProduct) {
    const remove = currentSale.filter((prod) => { 
      return prod.id !== idProduct })

    setCurrentSale(remove)

    toast.success('Removido!')
  }

  return  (
    <>
      {currentSale.map(elem => (
          <LittleCard key={elem.id} currentSale={currentSale} setCurrentSale={setCurrentSale}>
            <img src={elem.img} />
              <section>
                  <h3>{elem.name}</h3>
                  <span>{elem.category}</span>
              </section>
            <button onClick={() => deleteProduct(elem.id)}>Remover</button>
        </LittleCard>
      ))} 
    </>
  )
}