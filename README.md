# postcss-tailwind-css-data-attr
Postcss plugin [tailwind-css-data-attr].

[PostCSS] Plugin to convert tailwind css classes inside HTML data-attribute to working css file


[PostCSS]: https://github.com/postcss/postcss
[tailwind-css-data-attr]: https://github.com/aersosi/postcss-tailwind-css-data-attr

---

You can write this:
```html
<h1 class="headline-class bg-pink-500"
    data-tw="pt-36 text-4xl text-purple-500">
  Hello, World.
</h1>
```
And this
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .headline-class {
    @apply text-blue-500;
  }
}
```
And you get this:
```css
[data-tw~="bg-pink-500"], .bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(236, 72, 153, var(--tw-bg-opacity));
}

[data-tw~="pt-36"], .pt-36 {
  padding-top: 9rem;
}

[data-tw~="text-center"], .text-center {
  text-align: center;
}

[data-tw~="text-4xl"], .text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

[data-tw~="font-bold"], .font-bold {
  font-weight: 700;
}

[data-tw~="text-purple-500"], .text-purple-500 {
  --tw-text-opacity: 1;
  color: rgba(139, 92, 246, var(--tw-text-opacity));
}

.headline-class {
  --tw-text-opacity: 1;
  color: rgba(59, 130, 246, var(--tw-text-opacity));
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-tailwind-css-data-attr
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-tailwind-css-data-attr'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
