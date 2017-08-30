let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let CleanWebpackPlugin = require('clean-webpack-plugin')
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let PurifyCSSPlugin = require('purifycss-webpack');
let inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry:
    {
        app: [
            './src/js/main.js',
            './src/scss/main.scss'
        ],
        //vendor: ['jquery', 'vue', 'axios'] // Compile and save jquery, vue, axios into vendor.js
    },
    output:
    {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js'
    },
    module:
    {
        rules: [
        {
            test: /\.s[ac]ss$/,
            use: ExtractTextPlugin.extract(
            {
                /*----To Ignore URLs/File Paths Completely In CSS----*/
                // use: [
                //     {
                //         loader: 'css-loader',
                //         options:
                //         {
                //             url: false
                //         }
                //     },
                //     'sass-loader'
                // ],
                use: ['css-loader', 'sass-loader'], // Comment this if above is uncommented.
                fallback: 'style-loader'
            })
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options:
            {
                loaders:
                {
                    'scss': [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                    'sass': [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ]
                }
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            options:
            {
                url: false
            }
        },
        {
            test: /\.(svg|eot|ttf|woff|woff2)$/,
            use: 'file-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loaders: [
                {
                    loader: 'file-loader',
                    options:
                    {
                        name: '../images/[name].[ext]'
                    }
                },
                'img-loader'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin('../css/[name].css'),
        new PurifyCSSPlugin(
        {
            // Give paths to parse for rules. These should be absolute!
            // For e.g. To add all blade files : "resources/views/**/*.blade.php"
            // For e.g. To add all .html files under "./app" directory :
            // paths: glob.sync(path.join(__dirname, 'app/*.html')),
            paths: glob.sync(path.join(__dirname, 'index.html')),
            minimize: inProduction
        }),
        new CleanWebpackPlugin(['dist', 'public'],
        {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.LoaderOptionsPlugin(
        {
            minimize: inProduction
        })
    ]
};

if (inProduction)
{
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}