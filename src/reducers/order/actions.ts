import { CoffeInCart } from './reducer'
import { ConfirmOrderData } from '../../contexts/OrderContext'

export enum ActionTypes {
  ADD_OR_REMOVE_COFFEE_IN_CART = 'ADD_OR_REMOVE_COFFEE_IN_CART',
  COMPLETELY_REMOVE_COFFEE_CART = 'COMPLETELY_REMOVE_COFFEE_CART',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export type Action =
  | ReturnType<typeof addOrRemoveCoffeeInCartAction>
  | ReturnType<typeof completelyRemoveACoffeeFromTheCartAction>
  | ReturnType<typeof confirmOrderAction>

export function addOrRemoveCoffeeInCartAction({
  coffeeId,
  amount,
}: CoffeInCart) {
  return {
    type: ActionTypes.ADD_OR_REMOVE_COFFEE_IN_CART,
    payload: {
      coffeeId,
      amount,
    },
  } as const
}

export function completelyRemoveACoffeeFromTheCartAction(coffeeId: string) {
  return {
    type: ActionTypes.COMPLETELY_REMOVE_COFFEE_CART,
    payload: {
      coffeeId,
    },
  } as const
}

export function confirmOrderAction(orderData: ConfirmOrderData) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: {
      orderData,
    },
  } as const
}
