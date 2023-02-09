import { ChangeEvent, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer, NumberInput } from './style'

interface CounterProps {
  defaultValue?: number
  minValue?: number
  maxValue?: number
  onChangeCounter: (currentCounter: number) => void
}

export function Counter({
  defaultValue = 0,
  minValue = 0,
  maxValue = 99,
  onChangeCounter,
}: CounterProps) {
  const [counter, setCounter] = useState(defaultValue)

  function handleAddOrSubtractOneTheCounter(operation: 'add' | 'subtract') {
    const shouldChangeTheCounter =
      counter > minValue ||
      (counter === minValue && operation === 'add') ||
      (counter > minValue && counter < maxValue)

    if (shouldChangeTheCounter) {
      const newCounterValue = operation === 'add' ? counter + 1 : counter - 1

      setCounter(newCounterValue)
      onChangeCounter(newCounterValue)
    }
  }

  function handleSetCounterSpecificValue(event: ChangeEvent<HTMLInputElement>) {
    const newCounterValue = parseInt(event.target.value)
      ? parseInt(event.target.value)
      : minValue

    const shouldChangeTheCounter =
      newCounterValue >= minValue && newCounterValue <= maxValue

    if (shouldChangeTheCounter) {
      setCounter(newCounterValue)
      onChangeCounter(newCounterValue)
    }
  }

  return (
    <CounterContainer>
      <Button
        type="button"
        aria-label="Remover um café do carrinho"
        onClick={() => handleAddOrSubtractOneTheCounter('subtract')}
      >
        <Minus size={14} weight="bold" />
      </Button>

      <NumberInput
        type="text"
        inputMode="numeric"
        value={counter}
        onChange={handleSetCounterSpecificValue}
        aria-label="Quantidade de cafés no carrinho"
      />

      <Button
        type="button"
        aria-label="Adicionar um café no carrinho"
        onClick={() => handleAddOrSubtractOneTheCounter('add')}
      >
        <Plus size={14} weight="bold" />
      </Button>
    </CounterContainer>
  )
}
