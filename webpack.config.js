var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.tsx',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'bundle')
    },
    mode:'development',
    devServer:{
        // contentBase:,
        port:9999,
        hot:true,
        headers: {
            'Access-Control-Allow-Origin': '*' //配合服务端开发,需要跨域
        }
    },
    module: {
        rules: [
            
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }  
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        　　 　　new HtmlWebpackPlugin({
        　　　　 　　template: path.resolve( './src/index.html'),
        　　　　 }),
                new webpack.HotModuleReplacementPlugin()
        　　 ]
} 