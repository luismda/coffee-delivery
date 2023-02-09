import styled from 'styled-components'

export const CounterContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.base_button};

  display: grid;
  grid-template-columns: 0.875rem 1.25rem 0.875rem;
  gap: 0.25rem;
  align-items: center;
`

export const Button = styled.button`
  background: transparent;
  border: 0;
  border-radius: 2px;
  line-height: 0;

  color: ${(props) => props.theme.purple};

  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme.purple_dark};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`

export const NumberInput = styled.input`
  background: transparent;
  text-align: center;
  border: 0;
  border-radius: 2px;

  -moz-appearance: textfield;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
