import React from 'react'
import Link from 'next/link'
import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/boxicons-regular/Lock'

import { Auth } from 'templates'
import { TextField, Button } from 'components'

const Signin = () => {
  return (
    <div>
      <Auth title="Sign up">
        <form>
          <TextField placeholder="Email" icon={<Email />} />
          <TextField placeholder="Password" type="password" icon={<Lock />} />
          <TextField
            placeholder="Confirm Password"
            type="password"
            icon={<Lock />}
          />

          <Button fullWidth>Sign up now</Button>

          <p>
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </p>
        </form>
      </Auth>
    </div>
  )
}

export default Signin
