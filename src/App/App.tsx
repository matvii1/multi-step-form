import { Button } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AccountForm from '../components/Forms/AccountForm'
import AddressForm from '../components/Forms/AddressForm'
import UsersForm from '../components/Forms/UsersForm'
import { FormContext } from '../context/useFormContext'
import useMultiStepForm from '../hooks/useMultiStepForm'
import { FormData } from '../types/FormData'
import './app.css'
import {
  StyledButtonContainer,
  StyledContainer,
  StyledCounter,
} from './AppStyles'

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [fieldsData, setFieldsData] = useState(INITIAL_DATA)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  })
  const {
    step,
    steps,
    currentStepIndex,
    goTo,
    back,
    next,
    isNextShown,
    isPrevShown,
    isLastStep,
  } = useMultiStepForm([
    <UsersForm {...fieldsData} updateFields={updateFields} />,
    <AddressForm {...fieldsData} updateFields={updateFields} />,
    <AccountForm {...fieldsData} updateFields={updateFields} />,
  ])

  function updateFields(field: Partial<FormData>): void {
    setFieldsData((prev) => ({
      ...prev,
      ...field,
    }))
  }

  function onSubmit(data: Partial<FormData>) {
    if (!isLastStep) {
      next()

      return
    }

    console.log({ data })

    alert('Form has been successfully sent' + JSON.stringify({ data }, null, 2))
    setFieldsData(INITIAL_DATA)
    goTo(0)
  }

  return (
    <FormContext.Provider value={{ register, errors }}>
      <StyledContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <StyledCounter>
            {currentStepIndex + 1} / {steps.length}
          </StyledCounter>
          {step}
          <StyledButtonContainer>
            <Button
              variant="outlined"
              type="button"
              disabled={!isPrevShown}
              onClick={back}>
              Prev
            </Button>
            <Button variant="outlined" type="submit">
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </StyledButtonContainer>
        </form>
      </StyledContainer>
    </FormContext.Provider>
  )
}

export default App
