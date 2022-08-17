const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "[name] [contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
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
