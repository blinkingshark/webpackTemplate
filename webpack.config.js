const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Should be an absolute path. Threfore need to have a build in node package 'path'
        filename: 'js/bundle.js', //Standard name
    },
};