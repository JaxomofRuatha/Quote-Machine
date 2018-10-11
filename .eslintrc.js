module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: ['react', 'import'],
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true
    }],
    'max-len': [1, {
      ignoreUrls: true
    }],
    'no-param-reassign': [1],
    'no-plusplus': [0],
    'no-undef': [2],
    'no-underscore-dangle': [0],
    'no-unused-expressions': [1, {
      allowTaggedTemplates: true,
      allowTernary: true
    }],
    'no-use-before-define': [0],
    'quote-props': [1, 'consistent'],

    /*
    *  React plugin rules
    */
    'react/destructuring-assignment': [2, {
      ignoreClassFields: true
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/jsx-no-bind': 1
  }
};
