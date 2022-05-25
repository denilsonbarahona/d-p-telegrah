const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@ui": path.resolve(__dirname, "src/infraestructure/ui"),
      "@redux": path.resolve(__dirname, "src/infraestructure/redux"),
      "@styles": path.resolve(__dirname, "src/infraestructure/ui/styles"),
      "@statics": path.resolve(__dirname, "src/infraestructure/statics"),
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.(woff|woff|eot|ttf|oft|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
};
