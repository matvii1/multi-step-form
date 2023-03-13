import { createContext } from 'react'

type FormContextType = {
  register: any
  errors: any
}

export const FormContext = createContext<FormContextType>({
  register: () => {},
  errors: {},
})
