/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here
  let twClasses = require('./twClasses').twClasses
  let whiteList = require('./twClasses').whiteList

  function findInArr(arr, arr2) {
    return [arr].every(i => arr2.includes(i));
  }

  function isClassSelector(selector) {
    return selector.indexOf('.') === 0;
  }

  let attr = "data-styleClass";

  // todo: 1. find only in data-attribute and compile to data-*
  // todo: 2. return tailwind if it's in regular class
  // todo: 3. add custom whiteList as option
  // todo: 4. add custom data-attr as option
  return {
    postcssPlugin: 'functional-css-data-attr',
    Root(root) {
      root.walkRules(rule => {
        rule.selector = rule.selector
          .split(' ')
          .map(j => j
            .replace(/\\\./g, 'SEPRTR')
            .split('.')
            .map(i => {
              // empty -> do nothing
              if (i === '') {
                return ''
              }
              // classes = whiteList -> do nothing
              if (findInArr(i, whiteList)) {
                return i
              }
              // classes = tw-classes -> add data-attr-css
              if (findInArr(i, twClasses)) {
                return `[${attr}~="${i}"],.${i}`
              }
              // classes = real classes -> use them as they are
              if (isClassSelector(j)) {
                return j;
              }
              return i
            })
            .join('')
            .replace(/SEPRTR/g, '\\.')
          ).join(' ')
      })
    }
  }
}

module.exports.postcss = true
