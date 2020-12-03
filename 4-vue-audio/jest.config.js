module.exports = {
  setupFiles: ["jest-canvas-mock"],
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  testMatch: ["**/__tests__/**/*"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
};
