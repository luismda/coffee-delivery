import { useContext } from 'react'

import { OrderContext } from '../contexts/OrderContext'

export function useOrder() {
  const orderContextData = useContext(OrderContext)

  return orderContextData
}
