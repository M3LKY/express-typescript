/*
 * diaries.ts
 *
 * This file defines the router for diary-related routes in an Express application.
 */

import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

/*
 * Route: GET /
 * Description: Returns all diary entries without sensitive information.
 */
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

/*
 * Route: GET /:id
 * Description: Returns a diary entry by its ID.
 * Parameters:
 *   - id: The ID of the diary entry to retrieve.
 */
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return diary != null ? res.send(diary) : res.sendStatus(404)
})

/*
 * Route: POST /
 * Description: Adds a new diary entry.
 * Request Body: The new diary entry object.
 */
router.post('/', (_req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(_req.body)
    const addedEntry = diaryServices.addEntry(newDiaryEntry)
    res.json(addedEntry)
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('An unknown error occurred.')
    }
  }
})

export default router
