import React, { FormEvent } from 'react'
import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'

import { Button, TextField } from 'components'
import * as S from '../Form'

type SignupData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type FormSignupProps = {
  onSubmit?: (credentials: SignupData) => void
}

export const FormSignup = ({ onSubmit }: FormSignupProps) => {
  const [data, setData] = React.useState<SignupData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleFormSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      !!onSubmit && onSubmit(data)
    },
    [data, onSubmit]
  )

  return (
    <S.FormWrapper onSubmit={handleFormSubmit}>
      <TextField
        placeholder="Name"
        icon={<AccountCircle />}
        onValueChange={(name: string) =>
          setData((state) => ({ ...state, name }))
        }
      />
      <TextField
        placeholder="Email"
        icon={<Email />}
        onValueChange={(email: string) =>
          setData((state) => ({ ...state, email }))
        }
      />
      <TextField
        placeholder="Password"
        type="password"
        icon={<Lock />}
        onValueChange={(password: string) =>
          setData((state) => ({ ...state, password }))
        }
      />
      <TextField
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
        onValueChange={(confirmPassword: string) =>
          setData((state) => ({ ...state, confirmPassword }))
        }
      />

      <Button fullWidth type="submit">
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </S.FormWrapper>
  )
}

export default FormSignup
