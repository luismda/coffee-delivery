import styled from 'styled-components'

export const CardContainer = styled.article`
  max-width: 16rem;
  background: ${(props) => props.theme.base_card};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;

  strong {
    background: ${(props) => props.theme.yellow_light};
    color: ${(props) => props.theme.yellow_dark};
    font-size: 0.625rem;
    line-height: 1.3;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const Name = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 1.3;
  text-align: center;
  color: ${(props) => props.theme.base_subtitle};

  margin-top: 1rem;
`

export const Description = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_label};

  text-align: center;
  margin-top: 0.5rem;
`

export const Buy = styled.div`
  margin-top: 2rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    line-height: 0;

    background: ${(props) => props.theme.purple_dark};
    color: ${(props) => props.theme.base_card};

    border-radius: 6px;

    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }
  }
`
