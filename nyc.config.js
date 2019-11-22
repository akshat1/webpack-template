module.exports = {
  'cache': true,
  'exclude': [
    'dist',
    'test'
  ],
  'all': true,
  'reporter': [
    'cobertura',
    'lcov',
    'text-summary'
  ],
  'reportDir': 'coverage',
  'instrument': true,
  'sourceMap': false
};
