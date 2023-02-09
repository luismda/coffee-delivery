import styled from 'styled-components'

export const SummaryPricesContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const DescriptionPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    line-height: 1.3;
  }

  span:first-child {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.base_subtitle};
  }
`
