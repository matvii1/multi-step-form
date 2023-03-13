import { CommonInput } from './CommonInput'

type Props = {
  value: string
  updateFields: (field: any) => void
  valType: string
  type: string
  focus: boolean
}

const emailOptions = {
  required: 'This field is required',
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Enter valid email',
  },
}

const textOption = {
  required: 'This field is required',
}

function CustomInput({ valType, value, updateFields, type, focus }: Props) {
  if (type === 'email') {
    return (
      <CommonInput
        focus={focus}
        type="text"
        valType={valType}
        value={value}
        updateFields={updateFields}
        validateOptions={emailOptions}
      />
    )
  }

  return (
    <CommonInput
      focus={focus}
      type={type}
      valType={valType}
      value={value}
      updateFields={updateFields}
      validateOptions={textOption}
    />
  )
}

export default CustomInput
