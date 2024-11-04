module.exports = {
  testEnvironmentOptions: {
    url: "http://localhost/", // or your desired test URL
  },
  testEnvironment: "jsdom",
  testTimeout: 10000,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
  silent: true,
  //   setupFiles: ["<rootDir>/__mocks__/axios.js"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  //   testResultsProcessor: "jest-sonar-reporter",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/src/assets/**",
    "!**/build/**",
    "!**/public/**",
    "!**.eslintrc.js **",
    "!**.prettierrc.js **",
    //"!**/screen/newDetailPage/*", "!**/screen/detailspages/*", "!**/src/screen/manageAsset/charger/charger-model/*", "!**/src/formGenerator/asset/*", "!**/test/saga.js", "!**/AssociatedChargersTable2.js", "!**/Diagnostics.js", "!**/service/**","!**/src/screen/topWidgetDetails/*","!**/src/screen/newManagePricing/*","!**/src/screen/users/*","!**/src/screen/alert/*","!**/src/screen/user-profile/*","!**/reports-inner/Report-Users.js", "!**/googleMap/**", "!**/map/**", "!**/config/**", "!**/jest.config.js","!**/src/reportWebVitals.js","!**/coverage/**","!**/.storybook/**"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/.eslintrc.js",
    "<rootDir>/.prettierrc.js",
    "<rootDir>/jest.config.js",
    "<rootDir>/vite.config.js",
    "<rootDir>/eslint.config.js",
    "<rootDir/coverage/",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
  //   setupFilesAfterEnv: [
  //     "@testing-library/jest-dom/extend-expect",
  //     "./src/setupTests.js",
  //   ],
  // coverageDirectory: "<rootDir>/coverage/",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 80,
      statements: 0,
    },
  },
};
