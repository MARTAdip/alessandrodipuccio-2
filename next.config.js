const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const path = require('path');

module.exports = withFonts(
  withCSS(
    withSass(
      withImages({
        enableSvg: true,
        inlineImageLimit: 16384,
        esModule: true,
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|jpe?g|)$/gi,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
              },
            },
          });
          return config;
        },
      })
    )
  )
);
