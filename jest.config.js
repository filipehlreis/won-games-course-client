/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/types/**/*.ts',
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};
