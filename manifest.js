const {createElement} = require('react')

const Manifest = ({
  href = '/static/manifest/manifest.json',
  themeColor = '#FFFFFF',
  initialScale = '1'
}) => {
  const head = [
    createElement('meta', {
      name: "viewport",
      content: "width=device-width",
      "initial-scale": initialScale
    }),
    createElement('meta', {
      name: "theme-color",
      content: themeColor
    }),
    createElement('link', {
    rel: "manifest",
    href: href
  })]

  return head
}

module.exports = Manifest
