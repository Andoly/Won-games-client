import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        type="text"
        placeholder="Name"
        label="Name"
        initialValue="Andoly"
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="andoly@gmail.com"
        label="E-mail"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
