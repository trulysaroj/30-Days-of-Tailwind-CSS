module.exports = {
    plugins: {
      tailwindcss: { config: './tailwindcss-config.js' },
    },


    theme: {
        extend: {}, 
    },
    varients: {
        extend: {
            display: ['group-focus'],
            opacity: ['group-focus'],
            inset: ['group-focus']
        },
    },
    plugins: [],
  }