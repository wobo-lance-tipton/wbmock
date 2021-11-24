/**
 * This file contains time period mock data
 * Currently only works with 1 active connection, because it response with the same user
 * The values are hardcoded, but should be update to be dyamic
 *
 * Need to update the date ranges to be relative to the current date
 *
 */

export const timePeriods = [
  {
    start: '10/1/2021',
    end: '12/31/2021',
    period: 4,
    name: 'Q4 2021',
    year: 2021,
    yearOffset: 1,
    format: 'm/d/Y',
    stats: 1,
    value: 1,
  },
  {
    start: '1/1/2022',
    end: '03/31/2022',
    period: 4,
    name: 'Q1 2022',
    year: 2022,
    yearOffset: 1,
    format: 'm/d/Y',
    stats: 1,
    value: 1,
  },
];
