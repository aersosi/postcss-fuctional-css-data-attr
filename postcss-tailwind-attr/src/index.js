/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {
  htmlAttribute: false
}) => {
  let twClasses = require('./twClasses').twClasses
  let whiteList = require('./twClasses').whiteList

  // options
  let attrSelector;
  opts.htmlAttribute ? attrSelector = `${opts.htmlAttribute}` : attrSelector = 'data-tailwind';

  function findInArr(arr, arr2) {
    return [arr].every(i => arr2.includes(i));
  }

  function isClassSelector(selector) {
    return selector.indexOf('.') === 0;
  }


  // todo: 1. find only in data-attribute and compile to data-*
  // todo: 2. return tailwind if it's in regular class
  // todo: 3. add custom whiteList as option
  return {
    postcssPlugin: 'postcss-tailwind-attr',
    Root(root) {
      root.walkRules(rule => {
        rule.selector = rule.selector
          .split(' ')
          .map(i => {
            i.replace(/\\\./g, 'SEPRTR');

            console.log(i);
            // empty -> do nothing
            if (i === '') {
              return ''
            }
            // classes = whiteList -> do nothing
            if (findInArr(i, whiteList)) {
              return i
            }
            // classes = tw-classes -> create data-attr classes
            let nodot = i.replace(/\./g,'');
            if (findInArr(nodot, twClasses)) {
              return `[${attrSelector}~="${nodot}"], ${i}`
            }
            // classes = real classes -> use them as they are
            // if (isClassSelector(i)) {
            //   return i;
            // }
            return i
          })
          .join('')
          .replace(/SEPRTR/g, '\\.')
      })
    }
  }
}

module.exports.postcss = true
