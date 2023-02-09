import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, Money } from 'phosphor-react'

import { ConfirmOrderFormData } from '../..'
import { PaymentFieldsContainer, SelectButton } from './style'

export function PaymentFields() {
  const { register } = useFormContext<ConfirmOrderFormData>()

  return (
    <PaymentFieldsContainer>
      <SelectButton>
        <input
          type="radio"
          id="credit-card"
          value="credit_card"
          {...register('methodPayment')}
        />
        <label htmlFor="credit-card">
          <CreditCard size={16} />
          Cartão de crédito
        </label>
      </SelectButton>

      <SelectButton>
        <input
          type="radio"
          id="debit-card"
          value="debit_card"
          {...register('methodPayment')}
        />
        <label htmlFor="debit-card">
          <Bank size={16} />
          Cartão de débito
        </label>
      </SelectButton>

      <SelectButton>
        <input
          type="radio"
          id="money"
          value="money"
          {...register('methodPayment')}
        />
        <label htmlFor="money">
          <Money size={16} />
          Dinheiro
        </label>
      </SelectButton>
    </PaymentFieldsContainer>
  )
}
