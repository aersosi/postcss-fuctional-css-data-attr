
module.exports = (ctx) => ({
    plugins: {
        'functional-css-data-attr': {},
        cssnano: {},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ctx.env === 'production' ? {} : false
    },
})
