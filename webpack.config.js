module.exports = {
  entry: './app/src/index',
  output: {
    filename: './app/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      },
    ]
  }
};
