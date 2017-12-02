const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({
        path: '.env.test'
    });
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({
        path: '.env.development'
    });
}

module.exports = (env) =>{
    const isProduction = env  === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');
    return{
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module :{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: cssExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            cssExtract,
            new webpack.DefinePlugin({
                'proccess.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'proccess.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'proccess.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'proccess.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'proccess.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'proccess.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)

            })
        ],
        devtool: isProduction ? 'source-map' :'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            publicPath: '/dist/',
            historyApiFallback: true
        }
    };
};
