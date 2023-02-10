import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'

import { ConfirmOrderFormData } from '../..'

import {
  AddressFieldsContainer,
  Input,
  GroupInputs,
  OptionalInputText,
  WrapperOptionalInput,
} from './style'

export function AddressFields() {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext<ConfirmOrderFormData>()

  function handleAddMaskInZipCode(event: ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value

    event.target.value = currentValue
      .replace(/[^\d]/g, '')
      .replace(/^(\d{5})-?(\d{3})/, '$1-$2')
      .slice(0, 9)
  }

  function handleAddMaskInStateNameAbbreviation(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    event.target.value = event.target.value
      .replace(/\d/g, '')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <AddressFieldsContainer>
      <Input
        sizeInput="medium"
        type="text"
        inputMode="numeric"
        placeholder="CEP"
        aria-label="Seu CEP"
        aria-invalid={!!errors.address?.zipCode}
        onFocus={() =>
          errors.address?.zipCode ? clearErrors('address.zipCode') : undefined
        }
        {...register('address.zipCode', {
          onChange: handleAddMaskInZipCode,
        })}
      />

      <Input
        type="text"
        placeholder="Rua"
        aria-label="Sua Rua"
        aria-invalid={!!errors.address?.street}
        onFocus={() =>
          errors.address?.street ? clearErrors('address.street') : undefined
        }
        {...register('address.street')}
      />

      <GroupInputs columns={2}>
        <Input
          type="text"
          placeholder="Número"
          aria-label="Número da sua residência"
          aria-invalid={!!errors.address?.number}
          onFocus={() =>
            errors.address?.number ? clearErrors('address.number') : undefined
          }
          {...register('address.number')}
        />

        <WrapperOptionalInput>
          <Input
            type="text"
            placeholder="Complemento"
            aria-label="Complemento"
            aria-invalid={!!errors.address?.complement}
            onFocus={() =>
              errors.address?.complement
                ? clearErrors('address.complement')
                : undefined
            }
            {...register('address.complement')}
          />
          <OptionalInputText>Opcional</OptionalInputText>
        </WrapperOptionalInput>
      </GroupInputs>

      <GroupInputs columns={3}>
        <Input
          type="text"
          placeholder="Bairro"
          aria-label="Seu bairro"
          aria-invalid={!!errors.address?.district}
          onFocus={() =>
            errors.address?.district
              ? clearErrors('address.district')
              : undefined
          }
          {...register('address.district')}
        />

        <Input
          type="text"
          placeholder="Cidade"
          aria-label="Sua cidade"
          aria-invalid={!!errors.address?.city}
          onFocus={() =>
            errors.address?.city ? clearErrors('address.city') : undefined
          }
          {...register('address.city')}
        />

        <Input
          type="text"
          placeholder="UF"
          aria-label="Seu UF"
          aria-invalid={!!errors.address?.stateNameAbbreviation}
          onFocus={() =>
            errors.address?.stateNameAbbreviation
              ? clearErrors('address.stateNameAbbreviation')
              : undefined
          }
          {...register('address.stateNameAbbreviation', {
            onChange: handleAddMaskInStateNameAbbreviation,
          })}
        />
      </GroupInputs>
    </AddressFieldsContainer>
  )
}
