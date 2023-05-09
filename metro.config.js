/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-typescript-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'ts' && ext !== 'tsx'),
//       sourceExts: [...sourceExts, 'ts', 'tsx'],
//     },
//   };
// })();



// <----- react-native-svg-transformer
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
// react-native-svg-transformer ----->
