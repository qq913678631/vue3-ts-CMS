module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          // 接口重定向  http://152.136.185.210:5000/login
          '^/api': '/',
          // 接口重定向  http://152.136.185.210:5000/api/login
          // '^/api': '/api'

          // 发送请求头中host会设置成target
          changeOrigin: true
        }
      }
    }
  },
  // 合并到webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views'
      }
    }
  }
}
