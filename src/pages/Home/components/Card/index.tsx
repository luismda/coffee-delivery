import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

import { useOrder } from '../../../../hooks/useOrder'
import { Coffee } from '../../../../contexts/OrderContext'
import { Counter } from '../../../../components/Counter'

import {
  Actions,
  CardContainer,
  Image,
  Description,
  Buy,
  Price,
  Tags,
  Name,
} from './style'

export function Card({ id, name, description, price, tags }: Coffee) {
  const { addOrRemoveCoffeeInCart, coffeeListInCart } = useOrder()

  const priceFormated = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  const coffeInCart = coffeeListInCart.find((coffee) => coffee.id === id)
  const amountInCart = coffeInCart?.amount ?? 0

  return (
    <CardContainer>
      <Image
        src={`/coffee-delivery/src/assets/coffees/${id}.png`}
        alt="Xícara de café"
      />

      <Tags>
        {tags.map((tag) => {
          return <strong key={tag}>{tag}</strong>
        })}
      </Tags>

      <Name>{name}</Name>

      <Description>{description}</Description>

      <Buy>
        <Price>
          R$ <strong>{priceFormated}</strong>
        </Price>

        <Actions>
          <Counter
            defaultValue={amountInCart}
            onChangeCounter={(currentCounter) =>
              addOrRemoveCoffeeInCart({ coffeeId: id, amount: currentCounter })
            }
          />
          <NavLink to="/checkout" aria-label="Ver meu carrinho">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Actions>
      </Buy>
    </CardContainer>
  )
}
