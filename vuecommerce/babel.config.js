module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}


// module.exports = {
//   presets: [
//     ['@vue/app', {
//       polyfills: [
//         'es.promise',
//         'es.symbol',

//       ]
//     }]
//   ]
// }

// If you want to include a polyfill, you need to:
//         - add a fallback 'resolve.fallback: { "zlib": require.resolve("browserify-zlib") }'
//         - install 'browserify-zlib'