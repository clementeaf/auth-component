module.exports = {
    preset: './jest-preset.json',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      '^@services/(.*)$': '<rootDir>/src/services/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testMatch: ['**/*.test.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  };
  