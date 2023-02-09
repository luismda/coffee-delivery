import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useOrder } from '../../hooks/useOrder'

import {
  ActionsContainer,
  Counter,
  HeaderContainer,
  Location,
  Logo,
} from './style'

import logoCoffeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  const { amountCoffeeInCart } = useOrder()

  return (
    <HeaderContainer>
      <NavLink to="/" aria-label="Voltar para a página inicial">
        <Logo src={logoCoffeDelivery} alt="" />
      </NavLink>

      <ActionsContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </Location>

        <NavLink to="/checkout" aria-label="Ver meu carrinho">
          <ShoppingCart size={22} weight="fill" />
          <Counter visibility={amountCoffeeInCart > 0 ? 'visible' : 'hidden'}>
            {amountCoffeeInCart}
          </Counter>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
