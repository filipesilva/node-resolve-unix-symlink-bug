import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  dest: 'src/build.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({ module: true }),
    commonjs({ include: 'node_modules/module2/**' })
  ]
}
