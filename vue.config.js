const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    // proxy: 'http://localhost:8080',
    // proxy: 'http://79.174.80.223:8080'
    proxy: 'http://79.174.80.223:8189'
    //  proxy: 'http://212.22.70.159:1337/',
    // proxy: 'http://localhost:8080/',
  },
})