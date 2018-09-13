import React, { Component } from 'react'
import { Cookies, Link, Button } from '../styles'

export default class extends Component {
  state = {
    show: false
  }

  componentWillMount () {
    if (!this.isSet()) {
      setTimeout(() => this.setState({
        show: true
      }), 5000)
    }
  }

  isSet = () => {
    return !!localStorage.getItem('gdpr')
  }

  show () {
    this.setState({
      show: true
    })
  }

  hide () {
    this.setState({
      show: false
    })
  }

  handleAllow = () => {
    localStorage.setItem('gdpr', true)
    this.hide()
  }

  handleDecline = () => {
    this.hide()
  }

  render () {
    const { show } = this.state

    return (
      <Cookies show={show}>
        <Cookies.Inner>
          <Cookies.Message>We use cookies to deliver our services. By using our website, you agree to the use of cookies as described in our <Link href='/privacy'>Privacy Policy</Link>.</Cookies.Message>
          <Cookies.Controls>
            <Button onClick={this.handleAllow}>Allow</Button>
            <Button white onClick={this.handleDecline}>Decline</Button>
          </Cookies.Controls>
        </Cookies.Inner>
      </Cookies>
    )
  }
}
