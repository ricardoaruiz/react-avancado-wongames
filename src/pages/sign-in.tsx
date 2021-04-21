import React from 'react'

import { Auth } from 'templates'
import { FormSignin } from 'components'

const Signin = () => {
  return (
    <div>
      <Auth title="Sign in">
        <FormSignin />
      </Auth>
    </div>
  )
}

export default Signin
