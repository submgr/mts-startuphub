const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// vue.config.js
module.exports = {
    publicPath: './',
    configureWebpack: {
      plugins: [
        new ImageMinimizerPlugin({
            minimizer: {
              // Implementation
              implementation: ImageMinimizerPlugin.sharpMinify,
              // Options
              options: {
                encodeOptions: {
                  jpeg: {
                    quality: 90,
                  },
                },
              },
            },
          })
      ]
    }
  }