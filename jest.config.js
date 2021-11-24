/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require('../jest.base.config.js'),

  /* ---- Service specific options here ---- */
  setupFilesAfterEnv: ['<rootDir>/src/config/jest.setup.ts'],
};
