import styled from 'styled-components'

export const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  padding: 5.875rem 10rem 6.75rem;

  background-image: url('background-effect.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1256px) {
    & {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 826px) {
    & {
      padding: 5.875rem 5rem 6.75rem;
    }
  }

  @media (max-width: 646px) {
    & {
      padding: 5.875rem 2rem 6.75rem;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.base_title};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.base_subtitle};
  line-height: 1.3;
  margin-top: 1rem;
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 566px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`

const ITEM_COLORS = {
  yellowDark: 'yellow_dark',
  yellow: 'yellow',
  gray: 'base_text',
  purple: 'purple',
} as const

interface ItemProps {
  color: keyof typeof ITEM_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    line-height: 1.3;
    white-space: nowrap;
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme[ITEM_COLORS[props.color]]};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme.background};
    }
  }
`

export const CoffeeImage = styled.img`
  margin-left: auto;

  @media (max-width: 1346px) {
    width: 25rem;
  }
`
