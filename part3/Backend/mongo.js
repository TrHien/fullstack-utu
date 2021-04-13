const mongoose = require('mongoose')
require('dotenv').config()

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = process.env.MONGODB_URI

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const reminderSchema = new mongoose.Schema({
  name: String,
  timestamp: String,
})

const Reminder = mongoose.model('Reminder', reminderSchema)

if (process.argv.length === 2) {
  Reminder.find({}).then((reminders) => {
    console.log('Reminders:')
    reminders.forEach((reminder) => {
      console.log(`${reminder.name}, ${reminder.timestamp},`)

      mongoose.connection.close()
    })
  })
} else {
  const reminder = new Reminder({
    name: process.argv[2],
    timestamp: process.argv[3],
  })

  reminder.save().then((reminder) => {
    console.log(
      `adding person Reminder ${reminder.name} at ${reminder.timestamp} to the reminder database`
    )
    mongoose.connection.close()
  })
}
