/**
 * This file contains token mock data
 * Currently only works with 1 active connection, because it response with the same user
 * The values are hardcoded, but should be update to be dyamic
 */

/**
 * Eventually this should become a randomly generated number 
 */
const randomNum = '12345'

export const token = {
  code: randomNum,
  access_token: randomNum,
}

