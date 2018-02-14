module.exports = {
  entry: "./app/app.js",

  output: {
    filename: "./public/bundle/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};
