import React, { Component } from 'react'
import { Cookies, Link, Button } from '../styles'

export default class extends Component {
  state = {
    show: false
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

  isSet = () => {
    return !!localStorage.getItem('gdpr')
  }

  handleAllow = () => {
    localStorage.setItem('gdpr', true)
    this.hide()
  }

  handleDecline = () => {
    this.hide()
  }

  componentWillMount () {
    if (!this.isSet()) {
      setTimeout(() => this.show(), 5000)
    }
  }

  render () {
    const { show } = this.state

    return (
      <Cookies show={show}>
        <Cookies.Inner>
          <Cookies.Message>We use cookies to deliver our services. By using our website, you agree to the use of cookies as described in our <Link target='_blank' href='/privacy'>Privacy Policy</Link>.</Cookies.Message>
          <Cookies.Controls>
            <Button onClick={this.handleAllow}>Allow</Button>
            <Button white onClick={this.handleDecline}>Decline</Button>
          </Cookies.Controls>
        </Cookies.Inner>
      </Cookies>
    )
  }
}
