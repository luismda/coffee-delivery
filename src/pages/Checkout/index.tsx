import { useEffect } from 'react'
import { useForm, FormProvider, FieldErrors } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'
import { useNavigate } from 'react-router-dom'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { useOrder } from '../../hooks/useOrder'
import { useToast } from '../../hooks/useToast'
import { Address } from '../../reducers/order/reducer'

import { Card } from './components/Card'
import { EmptyCart } from './components/EmptyCart'
import { AddressFields } from './components/AddressFields'
import { PaymentFields } from './components/PaymentFields'
import { SummaryPrices } from './components/SummaryPrices'

import {
  Box,
  BoxDescription,
  BoxHeader,
  CheckoutFormContainer,
  CoffeeContainer,
  ConfirmOrderButton,
  OrderContainer,
  Title,
} from './style'

const confirmOrderFormValidationSchema = z.object({
  address: z.object({
    zipCode: z
      .string()
      .trim()
      .regex(/^\d{5}-\d{3}$/g, 'Informe o CEP no formato correto com hífen')
      .length(9, 'O CEP deve ter 9 caracteres com o hífen'),
    street: z.string().trim().min(3, 'A rua deve ter no mínimo 3 caracteres'),
    number: z
      .string()
      .trim()
      .min(1, 'Informe o número, ou coloque "Sem número"')
      .regex(
        /(^\d{1,5}$)|(^Sem número$)/g,
        'Informe o número corretamente, ou coloque "Sem número"',
      ),
    complement: z.string().trim().nullable(),
    district: z
      .string()
      .trim()
      .min(3, 'O bairro deve ter no mínimo 3 caracteres'),
    city: z.string().trim().min(3, 'A cidade deve ter no mínimo 3 caracteres'),
    stateNameAbbreviation: z
      .string()
      .trim()
      .length(2, 'O UF deve ter exatamente 2 caracteres')
      .regex(
        /(^AC$)|(^AL$)|(^AP$)|(^AM$)|(^BA$)|(^CE$)|(^DF$)|(^ES$)|(^GO$)|(^MA$)|(^MT$)|(^MS$)|(^MG$)|(^PA$)|(^PB$)|(^PR$)|(^PE$)|(^PI$)|(^RJ$)|(^RN$)|(^RS$)|(^RO$)|(^RR$)|(^SC$)|(^SP$)|(^SE$)|(^TO$)/g,
        'Informe um UF válido',
      )
      .transform((str) => str.toUpperCase()),
  }),
  methodPayment: z.enum(['credit_card', 'debit_card', 'money'] as const, {
    invalid_type_error: 'Informe a forma de pagamento',
  }),
})

export type ConfirmOrderFormData = z.infer<
  typeof confirmOrderFormValidationSchema
>

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    shouldFocusError: false,
  })

  const { coffeeListInCart, confirmOrder } = useOrder()
  const toast = useToast()

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    confirmOrder(data)

    navigate('/success')
  }

  function handleInvalidDataForm(errors: FieldErrors<ConfirmOrderFormData>) {
    const addressErrors = Object.keys(errors.address ?? {}) as Array<
      keyof Address
    >

    const addressErrorMessage = errors.address?.[addressErrors[0]]?.message
    const paymentErrorMessage = errors.methodPayment?.message

    toast.show({
      type: 'error',
      message:
        addressErrorMessage ??
        paymentErrorMessage ??
        'Preencha os campos corretamente',
    })
  }

  const { handleSubmit } = confirmOrderForm

  return (
    <CheckoutFormContainer
      onSubmit={handleSubmit(handleConfirmOrder, handleInvalidDataForm)}
    >
      <FormProvider {...confirmOrderForm}>
        <div>
          <Title>Complete seu pedido</Title>

          <OrderContainer>
            <Box>
              <BoxHeader iconColor="yellow_dark">
                <MapPinLine size={22} />

                <BoxDescription>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </BoxDescription>
              </BoxHeader>

              <AddressFields />
            </Box>

            <Box>
              <BoxHeader iconColor="purple">
                <CurrencyDollar size={22} />

                <BoxDescription>
                  <span>Pagamento</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </BoxDescription>
              </BoxHeader>

              <PaymentFields />
            </Box>
          </OrderContainer>
        </div>

        <aside>
          <Title>Cafés selecionados</Title>

          <CoffeeContainer>
            {coffeeListInCart.length > 0 ? (
              <Box roundedType="opposite">
                {coffeeListInCart.map(
                  ({ id, name, price, amount, imagePath }) => {
                    return (
                      <Card
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        amount={amount}
                        imagePath={imagePath}
                      />
                    )
                  },
                )}

                <SummaryPrices />

                <ConfirmOrderButton type="submit">
                  Confirmar pedido
                </ConfirmOrderButton>
              </Box>
            ) : (
              <Box roundedType="opposite">
                <EmptyCart />
              </Box>
            )}
          </CoffeeContainer>
        </aside>
      </FormProvider>
    </CheckoutFormContainer>
  )
}
