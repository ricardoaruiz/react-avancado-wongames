import React from 'react'
import Link from 'next/link'
import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/boxicons-regular/Lock'

import { Auth } from 'templates'
import { TextField, Button } from 'components'

const Signin = () => {
  return (
    <div>
      <Auth title="Sign in">
        <form>
          <TextField placeholder="Email" icon={<Email />} />
          <TextField placeholder="Password" type="password" icon={<Lock />} />

          <Link href="#">Forgot your password?</Link>

          <Button fullWidth>Sign in now</Button>

          <p>
            Don’t have an account? <Link href="/sign-up">Sign up</Link>
          </p>
        </form>
      </Auth>
    </div>
  )
}

export default Signin
