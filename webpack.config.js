const path = require('path');
const webpack = require('webpack');


const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src')
  
};

module.exports = {
	entry  : [	'event-source-polyfill', // necessary for hot reloading with IE
    			'webpack-hot-middleware/client',
    			path.join(paths.SRC, 'index')
    ],
	output : {
		path: path.resolve(__dirname, 'public'),
		filename : 'bundle.js' 
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
    
  ],
	
	module:{
		
	loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
    ],
		
	}
	
};