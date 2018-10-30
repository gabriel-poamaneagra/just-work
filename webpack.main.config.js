const path = require('path');

module.exports = {
    entry: './src/main/index.ts',
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
        library: 'justWork',
        libraryTarget: 'commonjs2',
        filename: 'just-work.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    target: 'node'
};