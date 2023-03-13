import styled from '@emotion/styled'
import { FormHelperText, FormLabel } from '@mui/material'
import { Box } from '@mui/system'

export const InputWrapper = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  gap: 15,
  justifyContent: 'space-between',
}))

export const CenteredLabel = styled(FormLabel)(() => ({
	alignSelf: 'center'
}))

export const ErrorMessage = styled(FormHelperText)(() => ({
	position: 'absolute',
	bottom: -16,
	right: 0,
	fontSize: '0.6em',
}))

