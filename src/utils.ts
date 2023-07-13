/*
 * utils.ts
 *
 * This module provides utility functions for parsing and validating data.
 */

import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

/*
 * Function: parseComment
 * Description: Parses and validates the comment from the request.
 * Parameters:
 *   - commentFromRequest: The comment received from the request.
 * Returns: The parsed comment as a string.
 * Throws: An error if the comment is incorrect or missing.
 */
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

/*
 * Function: parseDate
 * Description: Parses and validates the date from the request.
 * Parameters:
 *   - dateFromRequest: The date received from the request.
 * Returns: The parsed date as a string.
 * Throws: An error if the date is incorrect or missing.
 */
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

/*
 * Function: parseVisibility
 * Description: Parses and validates the visibility from the request.
 * Parameters:
 *   - visibilityFromRequest: The visibility received from the request.
 * Returns: The parsed visibility as a Visibility enum value.
 * Throws: An error if the visibility is incorrect or missing.
 */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

/*
 * Function: parseWeather
 * Description: Parses and validates the weather from the request.
 * Parameters:
 *   - weatherFromRequest: The weather received from the request.
 * Returns: The parsed weather as a Weather enum value.
 * Throws: An error if the weather is incorrect or missing.
 */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

/*
 * Function: isWeather
 * Description: Checks if a parameter is a valid Weather enum value.
 * Parameters:
 *   - param: The parameter to check.
 * Returns: A boolean indicating whether the parameter is a valid Weather enum value.
 */
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

/*
 * Function: isVisibility
 * Description: Checks if a parameter is a valid Visibility enum value.
 * Parameters:
 *   - param: The parameter to check.
 * Returns: A boolean indicating whether the parameter is a valid Visibility enum value.
 */
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

/*
 * Function: isString
 * Description: Checks if a parameter is a string.
 * Parameters:
 *   - text: The parameter to check.
 * Returns: A boolean indicating whether the parameter is a string.
 */
const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

/*
 * Function: isDate
 * Description: Checks if a parameter is a valid date string.
 * Parameters:
 *   - date: The parameter to check.
 * Returns: A boolean indicating whether the parameter is a valid date string.
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

/*
 * Function: toNewDiaryEntry
 * Description: Converts a JavaScript object to a NewDiaryEntry object.
 * Parameters:
 *   - Object: The JavaScript object to convert.
 * Returns: The converted NewDiaryEntry object.
 */
const toNewDiaryEntry = (Object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(Object.date),
    weather: parseWeather(Object.weather),
    visibility: parseVisibility(Object.visibility),
    comment: parseComment(Object.comment)
  }
  return newEntry
}

export default toNewDiaryEntry
