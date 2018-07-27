var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            // css 확장자를 가진 모든 파일에 use 적용
            // css-loader : 자바스크립트 파일에 합침
            // style-loader : style태그에 넣어줌
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}