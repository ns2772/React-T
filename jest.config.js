module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
    "\\.(ts|tsx)?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
