import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'main.js',
  dest: 'build.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({ module: true })
  ]
}
