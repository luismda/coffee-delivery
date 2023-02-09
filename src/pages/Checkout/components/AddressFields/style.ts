import styled from 'styled-components'

export const AddressFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`

interface InputProps {
  sizeInput?: 'small' | 'medium' | 'full'
}

const INPUT_SIZE = {
  small: '3.75rem',
  medium: '12.5rem',
  full: '100%',
}

export const Input = styled.input<InputProps>`
  width: ${(props) => INPUT_SIZE[props.sizeInput ?? 'full']};
  padding: 0.75rem;

  border: 1px solid ${(props) => props.theme.base_button};
  border-radius: 4px;

  background: ${(props) => props.theme.base_input};
  font-size: 0.875rem;
  line-height: 1.3;

  transition: border-color 0.1s;

  &::placeholder {
    color: ${(props) => props.theme.base_label};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.yellow_dark};
  }

  &[aria-invalid='true'] {
    border-color: ${(props) => props.theme.red};
  }

  @media (max-width: 566px) {
    & {
      width: ${(props) =>
        props.sizeInput === 'medium'
          ? '8rem'
          : INPUT_SIZE[props.sizeInput ?? 'full']};
    }
  }
`

export const WrapperOptionalInput = styled.div`
  position: relative;

  input:not(:placeholder-shown) + span {
    visibility: hidden;
  }

  &:focus-within {
    span {
      visibility: hidden;
    }
  }
`

export const OptionalInputText = styled.span`
  position: absolute;
  right: 12px;
  top: 15px;

  color: ${(props) => props.theme.base_label};
  font-style: italic;
  font-size: 0.75rem;
  line-height: 1.3;
`

interface GroupInputsProps {
  columns: 2 | 3
}

const GROUP_INPUTS_COLUMNS = {
  2: '12.5rem 1fr',
  3: '12.5rem 1fr 3.75rem',
}

export const GroupInputs = styled.div<GroupInputsProps>`
  display: grid;
  grid-template-columns: ${(props) => GROUP_INPUTS_COLUMNS[props.columns]};
  gap: 0.75rem;

  @media (max-width: 566px) {
    grid-template-columns: 1fr;
  }
`
