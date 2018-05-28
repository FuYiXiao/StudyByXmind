const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./config/webpack.dev.config.js');
const options = {
  contentBase: './dev',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});