
const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};




 