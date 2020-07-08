const { 
  PHASE_DEVELOPMENT_SERVER, 
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = phase => {
  const assetPrefix = (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_SERVER) 
    ? ''
    : '/thundercreate';

  return {
    assetPrefix,
    env: { ASSET_PREFIX: assetPrefix },
  };
};