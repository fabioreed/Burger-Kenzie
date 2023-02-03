import React from 'react'
import burgerKenzie from '../../../assets/Mask Group.svg'
import { FigureImg } from './style'

export const Logo = () => {
  return (
    <FigureImg>
        <img src={burgerKenzie} alt="Logo Burguer Kenzie" />
    </FigureImg>
  )
}
