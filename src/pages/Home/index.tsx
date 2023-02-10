import { useOrder } from '../../hooks/useOrder'
import { Info } from './components/Info'
import { Card } from './components/Card'

import { CoffeeListContainer, CoffeeList } from './style'

export function Home() {
  const { coffeeList } = useOrder()

  return (
    <div>
      <Info />

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffeeList.map(
            ({ id, name, description, price, tags, imagePath }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  tags={tags}
                  imagePath={imagePath}
                />
              )
            },
          )}
        </CoffeeList>
      </CoffeeListContainer>
    </div>
  )
}
