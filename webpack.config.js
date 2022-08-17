const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "VanillaJs Starter",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

module.exports = webpackConfig;
