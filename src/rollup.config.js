import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'main.js',
  dest: 'build.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({ module: true }),
    commonjs({ include: 'node_modules/module2/**' })
  ]
}
