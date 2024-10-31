import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: [
    './src/index.tsx',
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    historyApiFallback: true,
  },

};