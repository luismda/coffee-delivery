import { useState, useEffect } from 'react'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  CoffeeImage,
  InfoContainer,
  Items,
  Subtitle,
  Title,
  Item,
} from './style'

import coffeeImage from '../../../../assets/coffee-image.svg'

export function Info() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleWindowResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <InfoContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>

        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <Items>
          <Item color="yellowDark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Item>
          <Item color="gray">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item color="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item color="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </div>

      {windowWidth > 1256 && (
        <CoffeeImage
          src={coffeeImage}
          alt="Copo de café na cor branca e preta, levemente inclinado, com grãos de café ao lado em um fundo amarelo"
        />
      )}
    </InfoContainer>
  )
}
