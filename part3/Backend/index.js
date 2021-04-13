const express = require('express')
const app = express()

const cors = require('cors')
require('dotenv').config()
const Reminder = require('./models/reminder')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/api/reminders', (request, response) => {
  Reminder.find({})
    .then((reminders) => response.json(reminders))
    .catch((error) => {
      console.log(error)
      response.status(500).json({ error: 'could not fetch reminders' })
    })
})

// GET by Id
app.get('/api/reminders/:id', (request, response) => {
  Reminder.findById(request.params.id)
    .then((reminder) => {
      if (reminder) {
        response.json(reminder)
      } else {
        response.status(404).end()
      }
    })
    .catch(() => {
      response.status(400).json({ error: 'malformatted id' })
    })
})

app.delete('/api/reminders/:id', (request, response) => {
  Reminder.findByIdAndRemove(request.params.id)
    .then((reminder) => {
      if (reminder) {
        response.status(204).end()
      } else {
        response.status(400).send({
          error: `${reminder.name} was already deleted`,
        })
      }
    })
    .catch((error) => {
      response.status(400).json({ error: 'malformatted id' })
    })
})

app.post('/api/reminders/', (request, response) => {
  const body = request.body

  const reminder = new Reminder({
    name: body.name,
    timestamp: body.timestamp,
    id: Math.floor(Math.random() * 1000 + 2),
  })

  if (reminder.name === '') {
    response.status(400).json({ error: 'reminder name is missing' })
  }

  if (reminder.timestamp === '') {
    response.status(400).json({ error: 'timestamp name is missing' })
  }

  reminder.save().then((savedReminder) => response.json(savedReminder))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
