
module.exports = (ctx) => ({
    plugins: {
        'postcss-tailwind-attr': {htmlAttribute: 'data-arthur'},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ctx.env === 'production' ? {} : false
    },
})
