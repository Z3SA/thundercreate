const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/thundercreate' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
};