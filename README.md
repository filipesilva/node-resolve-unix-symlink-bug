[![Build Status][travis-badge]][travis-badge-url]

Repro of https://github.com/rollup/rollup-plugin-node-resolve/issues/94

```
npm run symlink
npm run rollup
(cd src && npm run rollup)
```

On unix, first rollup will succeed, but symlinked one will not.
On windows, both succeed.

[travis-badge]: https://travis-ci.org/filipesilva/node-resolve-unix-symlink-bug.svg?branch=master
[travis-badge-url]: https://travis-ci.org/filipesilva/node-resolve-unix-symlink-bug