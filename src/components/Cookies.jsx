import React from 'react'
import { Cookies, Link, Button } from '../styles'

export default () => {
  return (
    <Cookies>
      <Cookies.Inner>
        <Cookies.Message>We use cookies to deliver our services. By using our website, you agree to the use of cookies as described in our <Link href='/privacy'>Privacy Policy</Link>.</Cookies.Message>
        <Cookies.Controls>
          <Button>Allow</Button>
          <Button white>Decline</Button>
        </Cookies.Controls>
      </Cookies.Inner>
    </Cookies>
  )
}
