const path = require('path');
const defaultResolver = require('jest-resolve/build/defaultResolver');

module.exports = (request, options) => {
  // Example: Redirect '@root' alias to the root directory
  if (request.startsWith('@root')) {
    return path.join(options.rootDir, request.replace('@root', 'src'));
  }

  return defaultResolver(request, options);
};
