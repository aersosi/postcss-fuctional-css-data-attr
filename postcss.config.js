
module.exports = (ctx) => ({
    plugins: {
        'tailwind-data-attr': {},
        cssnano: {},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ctx.env === 'production' ? {} : false
    },
})
