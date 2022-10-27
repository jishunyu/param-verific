const path = require('path')
module.exports = {
    mode: 'production', // 注明生产环境下
    entry: './src/index.js', // 指定入口文件
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { "useBuiltIns": "entry" }]
                    ]
                  }
                }
            }
        ]
    }
}