const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Routes": path.resolve(__dirname, "src/infrastructure/ui/routes"),
      "@Redux": path.resolve(__dirname, "src/infrastructure/redux"),
      "@Images": path.resolve(__dirname, "src/infrastructure/statics/images"),
      "@atoms": path.resolve(__dirname, "src/infrastructure/ui/atoms"),
      "@molecules": path.resolve(__dirname, "src/infrastructure/ui/molecules"),
      "@organism": path.resolve(__dirname, "src/infrastructure/ui/organism"),
      "@template": path.resolve(__dirname, "src/infrastructure/ui/templates"),
      "@pages": path.resolve(__dirname, "src/infrastructure/ui/pages"),
      "@Style": path.resolve(__dirname, "src/infrastructure/ui/styles"),
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
    new DotEnv(),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
};
