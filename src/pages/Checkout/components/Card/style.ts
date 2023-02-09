import styled from 'styled-components'

export const CardContainer = styled.article`
  padding: 0.5rem 0.25rem 2rem;

  background: ${(props) => props.theme.base_card};
  border-bottom: 1px solid ${(props) => props.theme.base_button};

  display: flex;
  gap: 1.25rem;

  & + article {
    margin-top: 1.5rem;
  }
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const CardContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.base_subtitle};
    line-height: 1.3;
  }
`

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  padding: 0 0.5rem;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.base_button};
  color: ${(props) => props.theme.base_text};

  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  transition: background 0.1s, color 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
    transition: color 0.1s;
  }

  &:hover {
    background: ${(props) => props.theme.base_hover};
    color: ${(props) => props.theme.base_subtitle};

    svg {
      color: ${(props) => props.theme.purple_dark};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`
