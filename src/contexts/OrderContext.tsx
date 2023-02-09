import { createContext, ReactNode, useReducer, useEffect } from 'react'

import {
  addOrRemoveCoffeeInCartAction,
  completelyRemoveACoffeeFromTheCartAction,
  confirmOrderAction,
} from '../reducers/order/actions'

import {
  Address,
  CoffeInCart,
  MethodPayment,
  Order,
  orderReducer,
} from '../reducers/order/reducer'

import { coffeeList } from '../utils/coffee-list'

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
}

export interface CoffeeInfoInCart {
  id: string
  name: string
  price: number
  amount: number
}

export interface ConfirmOrderData {
  address: Address
  methodPayment: MethodPayment
}

interface OrderContextData {
  coffeeList: Coffee[]
  address: Address | null
  methodPayment: MethodPayment
  coffeeListInCart: CoffeeInfoInCart[]
  amountCoffeeInCart: number
  deliveryValue: number
  sumOfAllValuesInTheCart: number
  sumOfAllValuesInTheCartWithDelivery: number
  addOrRemoveCoffeeInCart: (coffeeInCart: CoffeInCart) => void
  completelyRemoveACoffeeFromTheCart: (coffeeId: string) => void
  confirmOrder: (data: any) => void
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, dispatch] = useReducer(
    orderReducer,
    {
      address: null,
      methodPayment: null,
      cart: [],
    } as Order,
    () => {
      const orderCart =
        localStorage.getItem('@coffee-delivery:order-cart-1.0.0') ?? '[]'

      return {
        address: null,
        methodPayment: null,
        cart: JSON.parse(orderCart),
      } as Order
    },
  )

  useEffect(() => {
    const orderCart = JSON.stringify(order.cart)

    localStorage.setItem('@coffee-delivery:order-cart-1.0.0', orderCart)
  }, [order.cart])

  function addOrRemoveCoffeeInCart({ coffeeId, amount }: CoffeInCart) {
    dispatch(addOrRemoveCoffeeInCartAction({ coffeeId, amount }))
  }

  function completelyRemoveACoffeeFromTheCart(coffeeId: string) {
    dispatch(completelyRemoveACoffeeFromTheCartAction(coffeeId))
  }

  function confirmOrder(data: ConfirmOrderData) {
    dispatch(confirmOrderAction(data))
  }

  const amountCoffeeInCart = order.cart.reduce((acc, { amount }) => {
    return acc + amount
  }, 0)

  const coffeeListInCart = order.cart.map(({ coffeeId, amount }) => {
    const coffee = coffeeList.find(({ id }) => id === coffeeId)!

    return {
      id: coffeeId,
      name: coffee.name,
      price: coffee.price,
      amount,
    }
  })

  const sumOfAllValuesInTheCart = coffeeListInCart.reduce(
    (acc, { price, amount }) => {
      const totalValueOfOneCoffee = price * amount
      return acc + totalValueOfOneCoffee
    },
    0,
  )

  const deliveryValue = 3.5

  const sumOfAllValuesInTheCartWithDelivery =
    sumOfAllValuesInTheCart + deliveryValue

  return (
    <OrderContext.Provider
      value={{
        coffeeList,
        address: order.address,
        methodPayment: order.methodPayment,
        coffeeListInCart,
        amountCoffeeInCart,
        sumOfAllValuesInTheCart,
        deliveryValue,
        sumOfAllValuesInTheCartWithDelivery,
        addOrRemoveCoffeeInCart,
        completelyRemoveACoffeeFromTheCart,
        confirmOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
