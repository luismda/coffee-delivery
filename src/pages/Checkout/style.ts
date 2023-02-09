import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
  margin-top: 2.5rem;
  padding: 0 10rem;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  @media (max-width: 1276px) {
    & {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 826px) {
    & {
      padding: 0 5rem;
    }
  }

  @media (max-width: 646px) {
    & {
      padding: 0 2rem;
    }
  }
`

export const Title = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
`

export const OrderContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface BoxProps {
  roundedType?: 'normal' | 'opposite'
}

const BOX_ROUNDED_TYPE = {
  normal: '6px',
  opposite: '6px 44px 6px 44px',
}

export const Box = styled.div<BoxProps>`
  background: ${(props) => props.theme.base_card};
  padding: 2.5rem;
  border-radius: ${(props) => BOX_ROUNDED_TYPE[props.roundedType ?? 'normal']};
`

interface BoxHeaderProps {
  iconColor: 'yellow_dark' | 'purple'
}

export const BoxHeader = styled.div<BoxHeaderProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[props.iconColor]};
  }
`

export const BoxDescription = styled.span`
  span {
    display: block;
    line-height: 1.3;
  }

  span:first-child {
    color: ${(props) => props.theme.base_subtitle};
  }

  span:last-child {
    font-size: 0.875rem;
  }
`

export const CoffeeContainer = styled.div`
  margin-top: 1rem;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  border: 0;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.6;
  text-transform: uppercase;

  cursor: pointer;

  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme.yellow_dark};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow_dark};
  }
`
