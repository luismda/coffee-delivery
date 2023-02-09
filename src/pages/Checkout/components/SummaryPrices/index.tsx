import { useOrder } from '../../../../hooks/useOrder'

import { SummaryPricesContainer, DescriptionPrice } from './style'

export function SummaryPrices() {
  const {
    deliveryValue,
    sumOfAllValuesInTheCart,
    sumOfAllValuesInTheCartWithDelivery,
  } = useOrder()

  function formatValueToCurrency(value: number) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <SummaryPricesContainer>
      <DescriptionPrice>
        <span>Total de itens</span>
        <span>{formatValueToCurrency(sumOfAllValuesInTheCart)}</span>
      </DescriptionPrice>

      <DescriptionPrice>
        <span>Entrega</span>
        <span>{formatValueToCurrency(deliveryValue)}</span>
      </DescriptionPrice>

      <DescriptionPrice>
        <strong>Total</strong>
        <strong>
          {formatValueToCurrency(sumOfAllValuesInTheCartWithDelivery)}
        </strong>
      </DescriptionPrice>
    </SummaryPricesContainer>
  )
}
