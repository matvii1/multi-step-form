import CustomInput from '../CustomInput.ts/CustomInput'
import FormWrapper from '../FormWrapper/FormWrapper'

type UserData = {
  email: string
  password: string
}

type Props = UserData & {
  updateFields: (field: Partial<UserData>) => void
}

function AccountForm({ email, password, updateFields }: Props) {
  return (
    <FormWrapper title="Register">
      <CustomInput
        focus={true}
        type="email"
        valType="email"
        value={email}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="password"
        valType="password"
        value={password}
        updateFields={updateFields}
      />
    </FormWrapper>
  )
}

export default AccountForm
