module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
