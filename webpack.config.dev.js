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
      "@context": path.resolve(__dirname, "src/app/ui/context"), 
      "@domain": path.resolve(__dirname, "src/domain"),
      "@Routes": path.resolve(__dirname, "src/app/ui/routes"),
      "@Redux": path.resolve(__dirname, "src/app/redux"),
      "@Images": path.resolve(__dirname, "src/app/statics/images"),
      "@atoms": path.resolve(__dirname, "src/app/ui/atoms"),
      "@molecules": path.resolve(__dirname, "src/app/ui/molecules"),
      "@organism": path.resolve(__dirname, "src/app/ui/organism"),
      "@template": path.resolve(__dirname, "src/app/ui/templates"),
      "@pages": path.resolve(__dirname, "src/app/ui/pages"),
      "@API": path.resolve(__dirname, "src/app/api"),
      "@Style": path.resolve(__dirname, "src/app/ui/styles"),
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
