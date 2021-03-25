module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        alias: {
          '~': './*',
					'@asstes': './src/asstes',
					'@res': './src/res',
					'@svg': './src/res/svg',
					'@hooks': './src/hooks',
					'@locales': './src/locales',
        },
      },
    },
  },
};
