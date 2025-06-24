module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    // グローバルCSSはすべてstyleMock.jsでモック
    "globals\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};