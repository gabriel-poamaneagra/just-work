const path = require('path');

module.exports = {
    entry: './src/plugins/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        library: 'justWorkPlugins',
        libraryTarget: 'commonjs2',
        filename: 'plugins.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    target: 'node'
};