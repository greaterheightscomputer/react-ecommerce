const path = require('path');  //node way of importing third party library
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //node way of importing third party library

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'});
}

module.exports = (env) => {
    // console.log('env', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return  {        
            entry: ['babel-polyfill', './src/app.js'],
            output: {
                path: path.join(__dirname, 'public', 'dist'),
                filename: 'bundle.js'
            },
            module: {
                rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            // 'style-loader', //this loader it is an inline loader which run after bundle.js as being excuted first 
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }]
            },
            plugins: [
                CSSExtract,
                new webpack.DefinePlugin({
                    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                    'process.env.FIREBASE_AUTHDOMAIN': JSON.stringify(process.env.FIREBASE_AUTHDOMAIN),
                    'process.env.FIREBASE_DATABASEURL': JSON.stringify(process.env.FIREBASE_DATABASEURL),
                    'process.env.FIREBASE_PROJECTID': JSON.stringify(process.env.FIREBASE_PROJECTID),
                    'process.env.FIREBASE_STORAGEBUCKET': JSON.stringify(process.env.FIREBASE_STORAGEBUCKET),
                    'process.env.FIREBASE_MESSAGINGSENDERID': JSON.stringify(process.env.FIREBASE_MESSAGINGSENDERID),
                    'process.env.FIREBASE_APPID': JSON.stringify(process.env.FIREBASE_APPID),
                    'process.env.FIREBASE_MEASUREMENTID': JSON.stringify(process.env.FIREBASE_MEASUREMENTID)
                })
            ],
            // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',  //source-map is good for production and is very slow in rebuilding  while cheap-module-eval-source-map is good for development and the rebuild is very fast
            devtool: isProduction ? 'source-map' : 'inline-source-map',  //we change the source map from cheap-module-eval-source-map to inline-source-map and the first is faster than the later beco's be we need to source-map our css as well for easy debug
            devServer: {
                contentBase: path.join(__dirname, 'public'),
                historyApiFallback: true,
                publicPath: '/dist/'      
            }
        };    
 };

