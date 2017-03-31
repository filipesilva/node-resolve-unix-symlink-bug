import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'main.js',
  dest: 'build.js',
  sourceMap: false,
  format: 'iife',
  onwarn: function (warning) {
    // Skip certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') { return; }
    // console.warn everything else
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true })
  ]
}
