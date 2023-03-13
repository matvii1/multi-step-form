import CustomInput from '../CustomInput.ts/CustomInput'
import FormWrapper from '../FormWrapper/FormWrapper'

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type Props = UserData & {
  updateFields: (field: Partial<UserData>) => void
}

function UsersForm({ firstName, lastName, age, updateFields }: Props) {
  return (
    <FormWrapper title="User Details">
      <CustomInput
        focus={true}
        type="text"
        valType="firstName"
        value={firstName}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="text"
        valType="lastName"
        value={lastName}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="number"
        valType="age"
        value={age}
        updateFields={updateFields}
      />
    </FormWrapper>
  )
}

export default UsersForm
