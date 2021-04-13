const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const reminderSchema = new mongoose.Schema({
  name: String,
  timestamp: String,
})

reminderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Reminder', reminderSchema)
