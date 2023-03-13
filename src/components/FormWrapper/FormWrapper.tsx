import { ReactNode } from 'react'
import { StyledTitle, StyledWrapper } from './StyledFormWrapper'

type Props = {
  title: string
  children: ReactNode
}

function FormWrapper({ title, children }: Props) {
  return (
    <>
      <StyledTitle variant='h5'>
        {title}
      </StyledTitle>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  )
}

export default FormWrapper
