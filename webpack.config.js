module.exports = {
  default: {
    entry: {
      src: '',
    },
    output: {
      filename: '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'minify'],
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    mode: 'production',
    stats: {
      colors: true,
    },
    devtool: 'source-map',
  },
  react: {
    entry: {
      src: '',
    },
    output: {
      filename: '.bundle',
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react'],
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'minify'],
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: require.resolve('react'),
          use: [
            {
              loader: 'expose-loader',
              query: 'React',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
    },
    mode: 'production',
    stats: {
      colors: true,
    },
    devtool: 'source-map',
  }
};
