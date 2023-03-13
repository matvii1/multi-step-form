import styled from '@emotion/styled'
import { Box } from '@mui/system'

export const StyledCounter = styled(Box)(() => ({
  position: 'absolute',
  right: 15,
  top: 15,
  fontFamily: 'Montserrat',
}))

export const StyledButtonContainer = styled(Box)(() => ({
  marginTop: '2rem',
  display: 'grid',
  marginLeft: 'auto',
  gridTemplateColumns: 'repeat(2, 1fr)',
  maxWidth: '75%',
  gap: 10,
  justifyContent: 'flex-end',
}))

export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100dvh',
}))
