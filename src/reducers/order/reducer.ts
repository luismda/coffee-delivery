import { produce } from 'immer'

import { Action, ActionTypes } from './actions'

export interface CoffeInCart {
  coffeeId: string
  amount: number
}

export interface Address {
  zipCode: string
  street: string
  number: string
  complement?: string | null
  district: string
  city: string
  stateNameAbbreviation: string
}

export type MethodPayment = 'credit_card' | 'debit_card' | 'money' | null

export interface Order {
  address: Address | null
  methodPayment: MethodPayment
  cart: CoffeInCart[]
}

export function orderReducer(state: Order, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_OR_REMOVE_COFFEE_IN_CART: {
      const coffeeInCartIndex = state.cart.findIndex(
        ({ coffeeId }) => coffeeId === action.payload.coffeeId,
      )

      const shouldRemoveCoffeeOfCart = action.payload.amount === 0
      const coffeeIsNotExistsInCart = coffeeInCartIndex < 0

      return produce(state, (draft) => {
        if (shouldRemoveCoffeeOfCart) {
          draft.cart.splice(coffeeInCartIndex, 1)
        } else if (coffeeIsNotExistsInCart) {
          draft.cart.push({
            coffeeId: action.payload.coffeeId,
            amount: action.payload.amount,
          })
        } else {
          draft.cart[coffeeInCartIndex].amount = action.payload.amount
        }
      })
    }

    case ActionTypes.COMPLETELY_REMOVE_COFFEE_CART: {
      const cartWithoutOneCoffee = state.cart.filter(
        ({ coffeeId }) => coffeeId !== action.payload.coffeeId,
      )

      return produce(state, (draft) => {
        draft.cart = cartWithoutOneCoffee
      })
    }

    case ActionTypes.CONFIRM_ORDER:
      return produce(state, (draft) => {
        const orderData = action.payload.orderData

        draft.address = orderData.address
        draft.methodPayment = orderData.methodPayment
        draft.cart = []
      })

    default:
      return state
  }
}
