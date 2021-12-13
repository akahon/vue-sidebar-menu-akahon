module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended'],
  // extends: ['plugin:vue/recommended'],
  // parserOptions: {
  //   // parser: 'babel-eslint',
  //   parser: 'vue-eslint-parser',
  //   parserOptions: {
  //     vueFeatures: {
  //       interpolationAsNonHTML: true,
  //     },
  //   },
  // },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    vueFeatures: {
      sourceType: 'module',
      allowImportExportEverywhere: false,
      // filter: true,
      // interpolationAsNonHTML: false,
      // styleCSSVariableInjection: true
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    semi: ['error', 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: 'off',
    // camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 2,
    'vue/prop-name-casing': 'off',
  },
}
