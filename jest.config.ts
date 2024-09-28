import type { Config } from 'jest';

const config: Config = {
  // Enable verbose output for detailed information about each test run.
  verbose: true,

  // Specify the environment that will be used for testing.
  testEnvironment: 'jest-environment-jsdom',

  // Automatically clear mock calls and instances before every test.
  clearMocks: true,

  // A preset that allows Jest to transpile TypeScript files.
  preset: 'ts-jest',

  // Specify paths to moduleNameMapper to handle module imports in tests.
  moduleNameMapper: {
    // Mock static assets (images, SVGs, etc.)
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',

    // Resolve module aliases to the correct paths
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // An array of file extensions your modules use.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Directories to ignore when running tests.
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/'],

  // Directories to ignore for transformation.
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],

  // Specify how to transform files before testing.
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transpile TypeScript files.
    '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest to transpile JavaScript files.
  },

  // Setup files to run before each test suite.
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts', // Custom setup file, e.g., for configuring testing library.
  ],

  // Automatically reset mock state before every test.
  resetMocks: true,

  // Automatically restore mock state before every test.
  restoreMocks: true,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing.
  snapshotSerializers: ['@emotion/jest/serializer'],

  // Indicates whether each individual test should be reported during the run.
  reporters: ['default', 'jest-summary-reporter'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  setupFiles: ['dotenv/config'],

  // Configure code coverage collection.
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}', // Specify which files to collect coverage from.
    '!src/**/*.d.ts', // Exclude TypeScript declaration files.
    '!src/**/index.ts', // Exclude index files if necessary.
    '!src/**/types.ts', // Exclude types files if necessary.
  ],

  // The directory where Jest should output its coverage files.
  coverageDirectory: 'coverage',

  // Coverage thresholds to enforce.
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Custom resolver for resolving imports.
  resolver: '<rootDir>/jest.resolver.ts',

  // Enable watch plugins for enhanced watch mode experience.
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};

export default config;
