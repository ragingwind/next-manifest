# next-manifest

> Next.js plugin for [Web Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and PWA

# Installation

```sh
npm install --save next-manifest
```
or

```sh
yarn add next-manifest
```

# Usage

```js
// next.config.js
const withManifest = require('next-manifest')

module.exports = withManifest({
  // you can set all most of web manifest properties except icons, which will be overwritten with new relative path.
  ...manifestProperties,
  icons: {
    // source image path to generate applications icons in various sizes for manifest. this plugin only generate two types of sizes, 192x192, 512x512.
    src: './assets/pwa-icon.png'
    // true, no generate new icons every build time until images hash changed. false, generate new icons every build time
    cache: true
  },
})
```

## manifest.json and icons

After build is over without errors, `manifest.json` will be created at `static/manifest/` and icons will be generated at `static/manifest/icons`. Have a look at sample `manifest.json` generated with default values.

```json
{
  "name": "name at package.json",
  "short_name": "short name of name at package.json",
  "icons": [
    {
      "src": "/static/manifest/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/manifest/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#EFEFEF",
  "theme_color": "#EFEFEF"
}
```


## Deploying a manifest

Web manifest must be deployed in your HTML pages using a link tag in the head of your document.

```html
<link rel="manifest" href="/static/manifest/manifest.json">
```

## License

MIT © [Jimmy Moon](https://ragingwind.me)
