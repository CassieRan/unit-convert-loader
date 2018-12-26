const path = require('path');
const Config = require('webpack-chain');
const CleanPlugin = require('clean-webpack-plugin');
const lib = path.resolve(__dirname, '../lib')
const src = path.resolve(__dirname, '../src')
const nodeModules = path.resolve(__dirname, '../node_modules')
const config = new Config();
config
    // .externals('loader-utils')
    .mode('production')
    // Interact with entry points
    .entry('index')
    .add('./src/index.js')
    .end()
    // Modify output settings
    .output
    .path(lib)
    .filename('index.js');

config.module
    .rule('compile')
    .test(/\.js$/)
    .exclude
        .add(nodeModules)
        .end()
    .include
        .add(src)
        .end()
    .use('babel')
        .loader('babel-loader')
        .options({
            presets: [
                ['@babel/preset-env', { modules: false }]
            ]
        })

config
    .plugin('clean')
    .use(CleanPlugin, [[path.resolve(__dirname, '../lib')]]);

// Export the completed configuration object to be consumed by webpack
module.exports = config.toConfig();

