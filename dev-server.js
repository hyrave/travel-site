const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const PORT = 49160;
const HOST = '0.0.0.0';

const config = require('./webpack.config.js');
const options = {
  contentBase: './app',
  hot: true,
  host: HOST,
};

webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

server.listen(PORT,HOST, () => {
  console.log('dev server listening on port'+PORT);
});