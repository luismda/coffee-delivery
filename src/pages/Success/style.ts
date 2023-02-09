import styled from 'styled-components'

export const SuccessContainer = styled.section`
  padding: 0 10rem;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;
  align-items: flex-end;

  @media (max-width: 1256px) {
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

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.yellow_dark};
`

export const Subtitle = styled.p`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme.base_subtitle};
`

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  gap: 0.75rem;
`

interface IconProps {
  color: 'purple' | 'yellow' | 'yellow_dark'
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[props.color]};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const InfoText = styled.span`
  line-height: 1.3;

  span {
    display: block;
  }
`

export const SuccessDeliveryImage = styled.img`
  margin-left: auto;

  @media (max-width: 1366px) {
    width: 26.5rem;
  }
`
