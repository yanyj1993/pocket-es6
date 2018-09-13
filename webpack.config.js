const path = require('path');

module.exports = {
    devtool: '#source-map',
    mode: 'production',
    entry: {
        pocket: './src/index.js',
        'pocket-ua': './src/index-ua.js',
    },  //入口文件
    output: {  //输出文件路径设置
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
    ]
};
