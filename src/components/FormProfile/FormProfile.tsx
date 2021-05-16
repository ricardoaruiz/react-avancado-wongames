import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { TextField } from 'components/TextField'
import React from 'react'
import * as S from './FormProfile.styles'

export const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField label="Name" name="name" placeholder="John Cage" />
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="johncage@email.com"
          disabled
        />
        <TextField label="Password" name="password" type="password" />
        <TextField label="New password" name="new-password" type="password" />

        <S.Buttons>
          <Button fullWidth size="large">
            Save
          </Button>
        </S.Buttons>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
