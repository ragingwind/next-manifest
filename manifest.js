const {createElement} = require('react')

const Manifest = ({
  manifestHref = '/static/manifest/manifest.json',
  themeColor = null,
  initialScale = null
}) => {
  const head = [createElement('link', {
    rel: "manifest",
    href: manifestHref
  })]

  initialScale && head.unshift(createElement('meta', {
    name: "viewport",
    content: "width=device-width",
    "initial-scale": initialScale
  }))

  themeColor && head.unshift(createElement('meta', {
    name: "theme-color",
    content: themeColor
  }))

  return head
}


module.exports = Manifest
