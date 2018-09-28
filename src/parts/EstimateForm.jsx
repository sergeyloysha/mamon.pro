import React, { Component, Fragment } from 'react'
import { Alert, Heading2, Paragraph, Form, Field, Input, Textarea, Link, Button } from '../styles'
import axios from 'axios'

const initialForm = {
  name: null,
  email: null,
  contact: null,
  request: null
}

export default class extends Component {
  form = null
  state = {
    proccess: false,
    error: null,
    success: null,
    form: initialForm
  }

  handleInput = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  sendForm = (e) => {
    e.preventDefault()

    this.setState({
      proccess: true,
      success: null,
      error: null
    })

    axios.post('/email', {
      ...this.state.form
    })
      .then(() => {
        this.setState({
          success: true,
          proccess: false,
          form: initialForm
        })

        this.form.reset()

        setTimeout(() => this.setState({
          success: false
        }), 5000)
      })
      .catch((error) => {
        this.setState({
          proccess: false,
          success: null,
          error: error.response.data
        })
      })
  }

  render () {
    const { proccess, error, success } = this.state

    return (
      <Fragment>
        <Heading2>Get a free estimate!</Heading2>
        <Paragraph>Set your business goal and we will take care of its entire IT component. We will provide you with IT services and guide you through the steps.</Paragraph>
        <Form onSubmit={this.sendForm} innerRef={(node) => { this.form = node }}>
          { error && Array.isArray(error) &&
          <Field>
            <Alert error>{ error[0].msg }</Alert>
          </Field>
          }
          { success &&
            <Field>
              <Alert success>Thanks. We'll get back to you shortly.</Alert>
            </Field>
          }
          <Field>
            <Input
              type='text'
              placeholder='Your name'
              name='name'
              onKeyUp={this.handleInput}
            />
          </Field>
          <Field>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              onKeyUp={this.handleInput}
            />
          </Field>
          <Field>
            <Input
              type='text'
              placeholder='Phone or Skype'
              name='contact'
              onKeyUp={this.handleInput}
            />
          </Field>
          <Field>
            <Textarea
              placeholder='Request'
              name='request'
              onKeyUp={this.handleInput}
            />
          </Field>
          <Field>
            <Button
              medium
              disabled={proccess}
            >Send</Button>
          </Field>
          <Field>
            You accept the <Link href='/privacy'>Privacy Policy and Terms of Use</Link>
          </Field>
        </Form>
      </Fragment>
    )
  }
}
