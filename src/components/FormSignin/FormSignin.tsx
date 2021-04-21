import React, { FormEvent } from 'react'
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { Button, TextField } from 'components'
import * as S from './FormSignin.styles'

type Credentials = {
  email: string
  password: string
}

export type FormSigninProps = {
  onSubmit?: (credentials: Credentials) => void
}

export const FormSignin = ({ onSubmit }: FormSigninProps) => {
  const [credentials, setCredentials] = React.useState<Credentials>({
    email: '',
    password: ''
  })

  const handleFormSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      !!onSubmit && onSubmit(credentials)
    },
    [credentials, onSubmit]
  )

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <TextField
        placeholder="Email"
        icon={<Email />}
        onValueChange={(email: string) =>
          setCredentials((state) => ({ ...state, email }))
        }
      />
      <TextField
        placeholder="Password"
        type="password"
        icon={<Lock />}
        onValueChange={(password: string) =>
          setCredentials((state) => ({ ...state, password }))
        }
      />

      <S.ForgotPassword>
        <Link href="#">
          <a>Forgot your password?</a>
        </Link>
      </S.ForgotPassword>

      <Button fullWidth type="submit">
        Sign in now
      </Button>

      <S.Disclamer>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.Disclamer>
    </S.Form>
  )
}

export default FormSignin
