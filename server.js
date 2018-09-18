const express = require('express')
const nodemailer = require('nodemailer')

const bodyParser = require('body-parser')
const validator = require('express-validator')
const path = require('path')

const transporter = nodemailer.createTransport({
  service: 'yandex',
  auth: {
    user: 'form@mamon.pro',
    pass: 'mam0npr0sm13'
  }
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(validator())
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.post('/email', (req, res) => {
  req.checkBody('name', 'Name must be specified.').notEmpty()
  req.checkBody('email', 'Enter a valid email address.').isEmail()

  var errors = req.validationErrors()

  if (errors) {
    res.status(400).send(errors)
  } else {
    const mailOptions = {
      from: 'form@mamon.pro',
      to: 'contact@mamon.pro',
      subject: 'Estimation Request',
      html: `<b>Name: </b>${req.body.name}<br/><b>Email: </b>${req.body.email}<br/><b>Phone/Skype: </b>${req.body.contact}<br/><b>Request: </b>${req.body.request}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (!error) {
        res.status(200).send(JSON.stringify({ 'success': 'all good' }))
      }
    })
  }
})

console.log('Server is running on', 8000, '0.0.0.0')

app.listen(8000, '0.0.0.0')
