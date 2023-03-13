import { TextField } from '@mui/material'
import { ChangeEvent, useContext } from 'react'
import { FormContext } from '../../context/useFormContext'
import { getLabelName } from '../../helpers/getLabelName'
import { CenteredLabel, ErrorMessage, InputWrapper } from './StyledCustomInput'

type CommonProps = {
  value: string
  updateFields: (field: any) => void
  valType: string
  type: string
  focus: boolean
  validateOptions: any
}

export function CommonInput({
  valType,
  value,
  updateFields,
  type,
  focus,
  validateOptions,
}: CommonProps) {
  const labelName = getLabelName(valType)
  const { register, errors } = useContext(FormContext)

  return (
    <InputWrapper>
      <CenteredLabel htmlFor={valType}>{labelName}</CenteredLabel>
      <TextField
        autoFocus={focus}
        autoComplete="off"
        inputProps={{
          style: {
            padding: '0.3rem 1rem',
          },
        }}
        variant="outlined"
        type={type === 'email' ? 'text' : type}
        error={!!errors[valType]}
        id={valType}
        value={value}
        {...register(valType, validateOptions)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          updateFields({ [valType]: e.target.value })
        }}
      />

      {errors[valType] && (
        <ErrorMessage error>{errors[valType].message}</ErrorMessage>
      )}
    </InputWrapper>
  )
}
