module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/resources/js/$1'
    },
    extensionsToTreatAsEsm: ['.jsx'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
