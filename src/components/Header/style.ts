import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    border-radius: 2px;
  }

  a:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  @media (max-width: 826px) {
    & {
      padding: 2rem 5rem;
    }
  }

  @media (max-width: 646px) {
    & {
      padding: 2rem 2rem;
    }
  }
`

export const Logo = styled.img`
  width: 5.3125rem;
  height: 2.5rem;
`

export const ActionsContainer = styled.div`
  max-height: 2.375rem;
  display: flex;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
    line-height: 0;

    background: ${(props) => props.theme.yellow_light};
    color: ${(props) => props.theme.yellow_dark};

    border-radius: 6px;

    position: relative;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.yellow_dark};
    }
  }
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${(props) => props.theme.purple_light};
  color: ${(props) => props.theme.purple_dark};
  border-radius: 6px;

  font-size: 0.875rem;
  line-height: 1.3;

  svg {
    fill: ${(props) => props.theme.purple};
  }
`

interface CounterProps {
  visibility: 'visible' | 'hidden'
}

export const Counter = styled.span<CounterProps>`
  visibility: ${(props) => props.visibility};

  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;

  font-size: 0.75rem;
  font-weight: bold;

  background: ${(props) => props.theme.yellow_dark};
  color: ${(props) => props.theme.white};
`
