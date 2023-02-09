import { Trash } from 'phosphor-react'

import { useOrder } from '../../../../hooks/useOrder'
import { CoffeeInfoInCart } from '../../../../contexts/OrderContext'
import { Counter } from '../../../../components/Counter'

import {
  CardActions,
  CardContainer,
  CardContent,
  CardInfo,
  CoffeeImage,
  RemoveButton,
} from './style'

export function Card({ id, name, price, amount }: CoffeeInfoInCart) {
  const { addOrRemoveCoffeeInCart, completelyRemoveACoffeeFromTheCart } =
    useOrder()

  const priceFormated = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CardContainer>
      <CoffeeImage src={`/src/assets/coffees/${id}.png`} alt="Xícara de café" />

      <CardContent>
        <CardInfo>
          <span>{name}</span>
          <strong>{priceFormated}</strong>
        </CardInfo>

        <CardActions>
          <Counter
            defaultValue={amount}
            minValue={1}
            onChangeCounter={(currentCounter) =>
              addOrRemoveCoffeeInCart({
                coffeeId: id,
                amount: currentCounter,
              })
            }
          />

          <RemoveButton
            type="button"
            onClick={() => completelyRemoveACoffeeFromTheCart(id)}
          >
            <Trash size={16} />
            Remover
          </RemoveButton>
        </CardActions>
      </CardContent>
    </CardContainer>
  )
}
