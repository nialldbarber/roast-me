import { connection, connect } from 'mongoose'

require('dotenv').config({ path: '.env' })

connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useCreateIndex: true },
)

connection.once('open', () => {
  console.log('')
  console.log('||====================================================')
  console.log('||####################################################')
  console.log('||')
  console.log('|| 👉  Mongoose database connection established! 😎')
  console.log('||')
  console.log('||####################################################')
  console.log('||====================================================')
  console.log('')
})
