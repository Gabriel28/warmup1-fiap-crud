/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  collectCoverage: true
};

export default config;