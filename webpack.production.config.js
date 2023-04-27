const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { helloWorld: "./src/helloWorld.js", kiwi: "./src/kiwi.js" },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[contenthash].js",
    publicPath: "static/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader",
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "helloWorld.html",
      chunks: ["helloWorld"],
      title: "Hello world",
      template: "src/template.hbs",
      description: "Hello world page",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ["kiwi"],
      title: "Kiwi",
      template: "src/template.hbs",
      description: "Kiwi page",
      minify: false,
    }),
  ],
};
