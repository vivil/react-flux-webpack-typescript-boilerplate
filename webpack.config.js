module.exports = {
    entry: './develop/index.tsx',
    output: {
        filename: './public/resources/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    }
}
