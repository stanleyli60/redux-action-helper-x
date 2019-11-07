module.exports = {
  verbose: true,
  collectCoverageFrom: ["**/src/*.{js,jsx}", "!**/src/**/index.js"],
  coverageThreshold: {
    global: {
      statement: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
