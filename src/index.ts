/*
 * index.ts
 *
 * This file sets up an Express server and defines the routes for the diary API.
 */

import express from 'express'
import DiaryRouter from './routes/diaries'

const app = express()

/*
 * Middleware: express.json()
 * Description: Parses the request body and transforms it into a JSON object.
 */
app.use(express.json())

const port = 3000

/*
 * Route: GET /ping
 * Description: Returns a response with the current date.
 */
app.get('/ping', (_req, res) => {
  console.log('someone pinged here:')
  res.send('Today is: ' + new Date().toDateString())
})

/*
 * Route: /api/diaries
 * Description: Registers the DiaryRouter to handle requests starting with '/api/diaries'.
 */
app.use('/api/diaries', DiaryRouter)

/*
 * Method: listen()
 * Description: Starts the server and listens on the specified port.
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
