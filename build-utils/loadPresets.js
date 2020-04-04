const webpackMerge = require("webpack-merge");

const applyPresets = (env = { presets: [], mode }) => {
  const { presets = [] } = env;
  const mergePresets = [].concat(...[presets]);
  const mergeConfigs = mergePresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );
  return webpackMerge({}, ...mergeConfigs);
};

module.exports = applyPresets;
