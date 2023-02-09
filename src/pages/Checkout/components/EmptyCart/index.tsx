import { NavLink } from 'react-router-dom'
import { Coffee } from 'phosphor-react'

import { Description, EmptyCartContainer, Message } from './style'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <Coffee size={48} weight="fill" />

      <Message>O carrinho está vazio</Message>

      <Description>
        Selecione os seus cafés preferidos em{' '}
        <NavLink to="/">nosso catálogo</NavLink> para finalizar o pedido
      </Description>
    </EmptyCartContainer>
  )
}
