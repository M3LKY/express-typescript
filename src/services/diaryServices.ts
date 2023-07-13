/*
 * diaryServices.ts
 *
 * This module provides functions related to diary services.
 */

import diariesData from './diaries.json'
import {
  DiariesData,
  NonSensitiveInfoDiariesData,
  NewDiaryEntry
} from '../types'

// Assertion of types
const diaries: DiariesData[] = diariesData as DiariesData[]

/*
 * Function: getEntries
 * Description: Retrieves all diary entries.
 * Returns: An array of DiariesData objects.
 */
export const getEntries = (): DiariesData[] => diaries

/*
 * Function: findById
 * Description: Finds a diary entry by its ID.
 * Parameters:
 *   - id: The ID of the diary entry to find.
 * Returns: A NonSensitiveInfoDiariesData object if the entry is found, otherwise undefined.
 */
export const findById = (
  id: number
): NonSensitiveInfoDiariesData | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

/*
 * Function: getEntriesWithoutSensitiveInfo
 * Description: Retrieves all diary entries without sensitive information.
 * Returns: An array of NonSensitiveInfoDiariesData objects.
 */
export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiariesData[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility
      }
    })
  }

/*
 * Function: addEntry
 * Description: Adds a new diary entry.
 * Parameters:
 *   - NewDiaryEntry: The new diary entry object.
 * Returns: The added DiariesData object.
 */
export const addEntry = (newDiaryEntry: NewDiaryEntry): DiariesData => {
  const newEntry: DiariesData = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newEntry)
  return newEntry
}
