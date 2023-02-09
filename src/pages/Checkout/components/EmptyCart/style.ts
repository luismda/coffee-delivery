import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: ${(props) => props.theme.base_hover};
  }

  span {
    line-height: 1.3;
  }
`

export const Message = styled.span`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.base_subtitle};
`

export const Description = styled.span`
  text-align: center;
  font-size: 0.875rem;

  a {
    color: ${(props) => props.theme.purple};

    border-radius: 2px;
    transition: color 0.1s;
  }

  a:hover {
    color: ${(props) => props.theme.purple_dark};
  }

  a:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`
