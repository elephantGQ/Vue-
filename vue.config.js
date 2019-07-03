module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.aihuishou.com/portal-api/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
          }
      }
    }
  }
}