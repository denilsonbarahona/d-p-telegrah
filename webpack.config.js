const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
      "@Routes": path.resolve(__dirname, "src/infrastructure/ui/routes"),
      "@Redux": path.resolve(__dirname, "src/infrastructure/redux"),
      "@Images": path.resolve(__dirname, "src/infrastructure/statics/images"),
      "@UI-components": path.resolve(
        __dirname,
        "src/infrastructure/ui/components"
      ),
      "@UI-containers": path.resolve(
        __dirname,
        "src/infrastructure/ui/containers"
      ),
      "@UI-layouts": path.resolve(__dirname, "src/infrastructure/ui/layouts"),
      "@Style": path.resolve(__dirname, "src/infrastructure/ui/styles"),
      "@Style-components": path.resolve(
        __dirname,
        "src/infrastructure/ui/styles/components"
      ),
      "@Style-containers": path.resolve(
        __dirname,
        "src/infrastructure/ui/styles/containers"
      ),
      "@Style-layouts": path.resolve(
        __dirname,
        "src/infrastructure/ui/styles/layouts"
      ),
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
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
