module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    /**
         * * Lint Docs
         * ~ eslint: https://eslint.org/docs/rules/
         * ~ vue-eslint: https://eslint.vuejs.org/rules/
         *
        */
    // # OFF
    'arrow-parens': 'off',
    'prefer-const': 'off',
    'no-undef': 'off', // Compatibility
    'no-fallthrough': 'off',
    'no-extra-boolean-cast': 'off',
    'no-useless-catch': 'off',
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'no-unused-vars': ['off', {
      vars: 'local',
      args: 'none',
      ignoreRestSiblings: true
    }],
    'no-async-promise-executor': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/no-unused-vars': ['off', {
      ignorePattern: 'Regexp'
    }],
    'vue/no-unused-components': ['off', {
      ignoreWhenBindingPresent: true
    }],
    'vue/singleline-html-element-content-newline': 'off',
    // 'vue/singleline-html-element-content-newline': ['error', {
    //   'ignoreWhenNoAttributes': true,
    //   'ignoreWhenEmpty': true,
    //   'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS]
    // }],
    // # Default
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2, {
      SwitchCase: 1,
      ObjectExpression: 1,
      MemberExpression: 1,
      ImportDeclaration: 1,
      VariableDeclarator: 1,
      ignoredNodes: [
        'CallExpression > FunctionExpression.callee > BlockStatement.body'
      ],
      ignoreComments: true
    }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'block-spacing': ['error', 'always'],
    'no-tabs': ['error', {
      allowIndentationTabs: true
    }],
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'no-use-before-define': ['error', {
      functions: false,
      variables: false
    }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
      ignoreComments: true
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'no-spaced-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-unexpected-multiline': 'error',
    'space-in-parens': ['error', 'never', {
      exceptions: []
    }],
    'space-infix-ops': ['error', {
      int32Hint: false
    }],
    'space-before-blocks': ['error', 'always'],
    // 'space-before-function-paren': ['error', {
    //   anonymous: 'never',
    //   named: 'never',
    //   asyncArrow: 'always'
    // }],
    'singleline-html-element-content-newline': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true
    }]
  }
};
