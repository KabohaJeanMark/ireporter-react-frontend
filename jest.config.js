const {defaults} = require('jest-config');

module.exports = {
 moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
 setupFiles: ['./src/setupTests.js'],
 moduleNameMapper: {
   "\\.(css|scss|jpg|png)$": "identity-obj-proxy"
 },
};