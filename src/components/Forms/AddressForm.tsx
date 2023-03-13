import CustomInput from '../CustomInput.ts/CustomInput'
import FormWrapper from '../FormWrapper/FormWrapper'


type UserData = {
  street: string
  city: string
  zip: string
  state: string
}

type Props = UserData & {
  updateFields: (field: Partial<UserData>) => void
}

function AddressForm({ street, city, zip, state, updateFields }: Props) {
  return (
    <FormWrapper title="Address Info">
      <CustomInput
        focus={true}
        type="text"
        valType="street"
        value={street}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="text"
        valType="city"
        value={city}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="text"
        valType="state"
        value={state}
        updateFields={updateFields}
      />
      <CustomInput
        focus={false}
        type="number"
        valType="zip"
        value={zip}
        updateFields={updateFields}
      />
    </FormWrapper>
  )
}

export default AddressForm
