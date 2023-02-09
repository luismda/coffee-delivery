import { useState, useEffect } from 'react'
import { useOrder } from '../../hooks/useOrder'

import {
  OrderInfo,
  Subtitle,
  SuccessContainer,
  SuccessDeliveryImage,
  Title,
  Info,
  Icon,
  InfoText,
} from './style'

import successDeliveryImg from '../../assets/success-delivery.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const { address, methodPayment } = useOrder()

  function handleWindowResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const methodPayments = {
    credit_card: 'Cartão de Crédito',
    debit_card: 'Cartão de Débito',
    money: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <div>
        {address ? (
          <>
            <Title>Uhu! Pedido confirmado</Title>

            <Subtitle>
              Agora é só aguardar que logo o café chegará até você
            </Subtitle>
          </>
        ) : (
          <>
            <Title>Ops! Complete o seu pedido</Title>

            <Subtitle>
              Escolha seus cafés e informe o endereço de entrega
            </Subtitle>
          </>
        )}

        <OrderInfo>
          <Info>
            <Icon color="purple">
              <MapPin size={16} weight="fill" />
            </Icon>

            {address ? (
              <InfoText>
                Entrega em{' '}
                <strong>
                  {address?.street}, {address?.number}
                </strong>
                <span>
                  {address?.district} - {address?.city},{' '}
                  {address?.stateNameAbbreviation}
                </span>
              </InfoText>
            ) : (
              <InfoText>
                <span>Endereço de entrega não informado</span>
              </InfoText>
            )}
          </Info>

          <Info>
            <Icon color="yellow">
              <Timer size={16} weight="fill" />
            </Icon>

            <InfoText>
              Previsão de entrega{' '}
              <span>
                <strong>{address ? '20 min - 30 min' : '-'}</strong>
              </span>
            </InfoText>
          </Info>

          <Info>
            <Icon color="yellow_dark">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>

            <InfoText>
              Pagamento na entrega{' '}
              <span>
                <strong>
                  {methodPayment ? methodPayments[methodPayment] : '-'}
                </strong>
              </span>
            </InfoText>
          </Info>
        </OrderInfo>
      </div>

      {windowWidth > 1256 && (
        <SuccessDeliveryImage
          src={successDeliveryImg}
          alt="Ilustração de um homem sentado em cima de uma motocicleta roxa para fazer a entrega"
        />
      )}
    </SuccessContainer>
  )
}
