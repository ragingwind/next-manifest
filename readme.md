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

module.exports = withManifest(
  manifest: {
    // you can set all most of web manifest properties except icons,
    // which will be overwritten with new relative path.
    ...manifestProperties,
    // redefine icons properties of web manifest to pass argument for a source icon.
    // do not set src field if you want to keep your own icons paths.
    icons: {
      // source image path, to generate applications icons in various sizes for manifest.
      // this plugin try to only generate two types of sizes, 192x192, 512x512.
      src: './assets/pwa-icon.png'
      // default is true, no generating for new icons every build time until images hash changed.
      // if false is st, generate new icons every build time.
      cache: true
    }
  }
})
```

## manifest.json and icons

After build is over without errors, `manifest.json` will be created at `static/manifest/` and also, resized icons will be generated at `static/manifest/icons`. Have a look at sample `manifest.json` below with default values.

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
