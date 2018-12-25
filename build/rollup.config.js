import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV || 'cjs'

export default {
    input: 'src/index.js',
    output: {
        file: 'lib/index.js',
        sourcemap: true,
        format: env
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
