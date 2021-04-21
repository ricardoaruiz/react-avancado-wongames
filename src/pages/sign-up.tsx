import React from 'react'

import { FormSignup } from 'components'

import { Auth } from 'templates'

const Signin = () => {
  return (
    <div>
      <Auth title="Sign up">
        <FormSignup />
      </Auth>
    </div>
  )
}

export default Signin
