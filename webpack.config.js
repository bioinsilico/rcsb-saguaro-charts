const path = require('path');

module.exports = {
    mode: "development",
    //mode: "production",
    entry: {
        'ChartPlot':'./src/ChartPlot.tsx',
        'rcsb-saguaro-chart':'./src/ChartPlot.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', 'jsx' ]
    },
    output: {
        filename: '[name].js',
        library: 'RcsbChart',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map'
};
