const assetPrefix = process.env.BUILDING_FOR_NOW ? '/thundercreate' : '';

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
}