import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export const StyledTitle = styled(Typography)(() => ({
	textAlign: 'center',
	margin: 0,
	marginBottom: 25,
	fontWeight: 600
}))

export const StyledWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 25,
}))