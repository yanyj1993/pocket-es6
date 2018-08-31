
module.exports = {
    devtool: '#source-map',
    mode: 'production',
    entry: './static/js/modules/common/index.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,
        filename: './static/js/dist/map-common.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
