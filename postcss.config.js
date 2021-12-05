
module.exports = (ctx) => ({
    plugins: {
        'tailwind-data-attr': {htmlAttribute: 'data-arthur'},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ctx.env === 'production' ? {} : false
    },
})
