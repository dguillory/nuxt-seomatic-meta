const path = require('path');

export default function seomaticMetaModule(moduleOptions) {
  const defaults = {
    debug: false,
    routeRemap: [],
    backendUrl: this.options.env.BACKEND_URL || '',
    graphqlPath: this.options.env.GRAPHQL_PATH || '',
    graphqlToken: this.options.env.GRAPHQL_TOKEN || '',
    imgixDomain: this.options.env.IMGIX_DOMAIN || '',
    nativeImgDomain: this.options.env.NATIVE_IMG_DOMAIN || ''
  };

  const options = {
    ...defaults,
    ...this.options.seomaticMeta,
    ...moduleOptions
  };

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  });
}

module.exports.meta = require('../package.json');
