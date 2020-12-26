// basic vars

const path = require('path');

// module settings

module.exports = {
    // mode
    mode: "production",

    // main js file
    entry: './#src/js/index.js',

    // point js file 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },

    // watch mode
    watch: true
};