const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Bbee7.github.io/' // 替换为您的 GitHub 仓库名称
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
})

