/*
 * styleRules.js
 *
 * This file is where you should overwrite anything that you don't like from Prettier
 */
module.exports = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'always', { arraysInArrays: false }],
  'array-element-newline': ['error', 'consistent'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
  'capitalized-comments': ['error', 'always'],
	'comma-dangle': ['error', 'always-multiline'],
	'comma-spacing': ['error', { before: false, after: true } ],
	'comma-style': ['error', 'last'],
	'computed-property-spacing': ['error', 'never'],
	'consistent-this': ['warn', 'that'],
	'eol-last': ['error', 'never'],
	'func-call-spacing': ['error', 'never'],
	'func-name-matching': ['warn', 'always'],
	'func-names': ['error', 'as-needed'],
	'func-style': ['warn', 'declaration', { 'allowArrowFunctions': true }],
	'function-paren-newline': ['error', 'consistent'],
	'indent': ['error', 2, {
		'SwitchCase': 1,
		'VariableDeclarator': { "var": 2, "let": 2, "const": 3 },
		'MemberExpression': 1,
		'FunctionDeclaration': { 'body': 1, 'parameters': 1 },
		'FunctionExpression': { 'body': 1, 'parameters': 1 },
		'CallExpression': {'arguments': 1},
		'ArrayExpression': 1,
		'ObjectExpression': 1,
		'ImportDeclaration': 1,
		'flatTernaryExpressions': true,
		'ignoreComments': true,
	}],
  'jsx-quotes': ['error', 'prefer-single'],
	'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
	'keyword-spacing': ['error', { 'before': true, after: true }],
	'lines-around-comment': ['error', {
		'beforeBlockComment': true,
		'allowBlockStart': true,
		'allowBlockEnd': true,
		'allowClassStart': true,
		'allowClassEnd': true,
		'allowObjectStart': true,
		'allowObjectEnd': true,
		'allowArrayStart': true,
		'allowArrayEnd': true,
	}],
	'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'max-depth': ['error', 4],
	'max-len': ['error', {
		'code': 75,
		'ignoreTrailingComments': true,
		'ignoreUrls': true,
		'ignoreStrings': false,
		'ignoreTemplateLiterals': false,
		'ignoreRegExpLiterals': true,
    'ignorePattern': '^(import\\s(\\{\\s)?.+(\\s\\})?\\sfrom\\s[\'"].*[\'"]|(var|const|let).+require\\([\'"].*[\'"]\\));?',
	}],
	'max-lines': ['warn', 500],
	'max-lines-per-function': ['error', {
		'max': 35,
		'skipBlankLines': true,
		'skipComments': true,
	}],
	'max-nested-callbacks': ['warn', 5],
	'max-params': ['error', 3],
	'max-statements-per-line': ['error', { 'max': 2 }],
	'multiline-comment-style': ['error', 'bare-block'],
	'new-cap': 'error',
	'new-parens': 'error',
	'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-continue': 'error',
	'no-lonely-if': 'error',
	'no-mixed-spaces-and-tabs': 'error',
	'no-multiple-empty-lines': ['error', { 'max': 1 }],
	'no-new-object': 'error',
	'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
	'no-tabs': 'error',
	'no-trailing-spaces': 'error',
	'no-unneeded-ternary': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': ['error', 'any'],
	'object-curly-newline': ['error', { 'consistent': true }],
	'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
	'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
	'one-var': ['error', 'never'],
	'one-var-declaration-per-line': ['error', 'initializations'],
	'operator-assignment': ['error', 'always'],
	'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'ignore', ':': 'ignore', '+=': 'none', '||': 'ignore', '&&': 'ignore' } }],
	'padded-blocks': ['error', 'never'],
	'padding-line-between-statements': [
		'error',
		{ 'blankLine': 'always', 'prev': '*', 'next': 'cjs-export' },
		{ 'blankLine': 'always', 'prev': '*', 'next': 'export' },
		{ 'blankLine': 'always', 'prev': '*', 'next': 'class' },
  ], // TODO this could do with more work but it's a bit nit-picky https://eslint.org/docs/rules/padding-line-between-statements
  'quote-props': ['error', 'as-needed', { 'numbers': true, 'keywords': true }],
	'quotes': ['error', 'backtick'],
	'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always'}],
	'semi-spacing': 'error',
	'space-before-blocks': 'error',
	'space-before-function-paren': ['error', 'always'],
	'space-in-parens': ['error', 'never'],
	'space-infix-ops': 'error',
	'space-unary-ops': ['error', {
		'words': true,
		'nonwords': false,
	}],
	// the exceptions allow nice comment blocks =======================
	'spaced-comment': ['error', 'always', { 'exceptions': ['-', '='] }],
	'switch-colon-spacing': ['error', {'after': true, 'before': false}],
	'template-tag-spacing': ['error', 'never'],
};
