module.exports = {
  verbose: true,
  setupFilesAfterEnv: [
    './setupTests.js',
  ],
  collectCoverageFrom: [
    "**/components/*.{js,jsx}",
    "**/pages/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/cypress/**"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|scss)$': '<rootDir>/assetsTransformer.js',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'sass',
  ],
  moduleDirectories: [
    'node_modules',
  ],
};
