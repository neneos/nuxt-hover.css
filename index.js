module.exports = function AnimateCss(moduleOptions) {
    this.options.css.push({ src: 'hover.css/scss/hover.scss', lang: 'scss' })
}

module.exports.meta = require('./package.json');
