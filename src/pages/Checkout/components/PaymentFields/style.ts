import styled from 'styled-components'

export const PaymentFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  margin-top: 2rem;
`

export const SelectButton = styled.div`
  position: relative;
  flex: 1;

  input[type='radio'] {
    width: 1px;
    height: 1px;

    position: absolute;
    top: 50%;
    left: 50%;

    z-index: 0;
  }

  label {
    padding: 1rem;

    background: ${(props) => props.theme.base_button};
    border-radius: 6px;
    border: 1px solid transparent;

    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;
    transition: background 0.1s, border-color 0.1s;

    position: relative;
    z-index: 1;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  label:hover {
    background: ${(props) => props.theme.base_hover};
    color: ${(props) => props.theme.base_subtitle};
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme.purple_light};
    border-color: ${(props) => props.theme.purple};
  }

  input[type='radio']:not(:checked):focus + label {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }
`
