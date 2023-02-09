import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 2rem 10rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme.base_subtitle};
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

export const CoffeeList = styled.main`
  margin-top: 3.375rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
