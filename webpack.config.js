const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const DEV = "development";
const PRD = "production";
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV !== PRD;

module.exports = {
  mode: isDev ? DEV : PRD,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  devtool: isDev ? "eval-source-map" : "source-map",
  plugins: [new HtmlWebPackPlugin({ template: "public/index.html" })],
};
