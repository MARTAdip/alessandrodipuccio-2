const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')

module.exports = withCSS(withSass(), withImages({
  devIndicators: {
    autoPrerender: false,
  },
}));



// const withCSS = require("@zeit/next-css");
// require('dotenv').config()
// const path = require('path')
// const Dotenv = require('dotenv-webpack')


// module.exports = withCSS(withImages({
//     inlineImageLimit: 16384,
//     webpack(config, options) {
//         config.plugins = config.plugins || [];
//         config.plugins = [
//             ...config.plugins,

//             // Read the .env file
//             new Dotenv({
//                 path: path.join(__dirname, '.env'),
//                 systemvars: true
//             })
//         ];
//         return config
//     }
// }));