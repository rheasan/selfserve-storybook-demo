const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');


const defaultConfig = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

const storyBookConfig = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});


module.exports = withNativeWind(storyBookConfig, { input: './global.css' });