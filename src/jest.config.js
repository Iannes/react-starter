// this file does nothing?
// confirm this and delete it

module.exports = {
    jest: {
      roots: ['<rootDir>/src'],
      transform: {
        '^.+\\.[jt]sx?$': 'ts-jest',
      },
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['./src/setupTests.ts'],
      testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/index.ts',
        '/src/jest.utils.tsx',
        '/src/theme',
        '/amplify/',
      ],
      coverageThreshold: {
        global: {
          branches: 90,
          functions: 95,
          lines: 95,
          statements: 95,
        },
      },
      snapshotSerializers: ['enzyme-to-json/serializer'],
    },
  };
  