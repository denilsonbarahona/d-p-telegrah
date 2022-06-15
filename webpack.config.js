const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@Routes": path.resolve(__dirname, "src/infrastructure/ui/routes"),
      "@Redux": path.resolve(__dirname, "src/infrastructure/redux"),
      "@Images": path.resolve(__dirname, "src/infrastructure/statics/images"),
      "@atoms": path.resolve(__dirname, "src/infrastructure/ui/atoms"),
      "@molecules": path.resolve(__dirname, "src/infrastructure/ui/molecules"),
      "@organism": path.resolve(__dirname, "src/infrastructure/ui/organism"),
      "@template": path.resolve(__dirname, "src/infrastructure/ui/templates"),
      "@pages": path.resolve(__dirname, "src/infrastructure/ui/pages"),
      "@API": path.resolve(__dirname, "src/infrastructure/api"),
      "@Style": path.resolve(__dirname, "src/infrastructure/ui/styles"),
    },
  },
  mode: "production",
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
        test: /\.(woff|woff2|eot|ttf|otf|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new DotEnv(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
