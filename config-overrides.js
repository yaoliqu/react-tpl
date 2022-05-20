const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias,
  addLessLoader,
  addDecoratorsLegacy,
} = require('customize-cra')

const path = require('path')

module.exports = override(
  // add webpack alias
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['components']: path.resolve(__dirname, 'src/components'),
  }),
  // babel-plugin-import
  fixBabelImports('import', {
    libraryName: ['antd-mobile', 'antd'],
    style: true,
  }),

  // postcss-pxtorem
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*'],
    }),
  ]),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1890ff' },
      modifyVars: {},
    },
  }),
  addDecoratorsLegacy()
)
