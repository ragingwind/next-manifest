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
    // all of the manifest properties, @see https://developers.google.com/web/fundamentals/web-app-manifest/
    ...manifestProperties,
    // if you supply a src icon:
    // - icon(s) will be auto generated (at build time), according to sizes given below in "sizes:"
    // - any existing icon paths will be overwritten - so do not supply a src icon if you wish to 
    // retain paths in the manifest file! 
    icons: {
      // source image path, supply this to generate applications icons as per "sizes"
      src: './assets/pwa-icon.png',
      // default is true, cache images until the hash value of source image has changed
      // if false, new icon images will be generated every build time.
      cache: true,
      // default icon sizes are 192x192, 512x512 
      // @see https://developers.google.com/web/fundamentals/web-app-manifest/#icons
      // provide an array of sizes to override the default if you want to fine tune your icons
      // e.g. [72,96,128,144,152,192,384,512]
      sizes: [192, 512, ...]
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


## Deploying a manifest with more meta for PWA

Web manifest must be deployed in your HTML pages using a link tag in the head of your document. not only manifest link, also two of meta, viewport and theme-color might be needed for your PWA, like below the example:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="manifest" href="/static/manifest/manifest.json">
```

for your convenience, this plguin supports `Manifest` component. You can place `Manifest` component under `<Head>` component in `_document.js` with props.

```js
// pages/_document.js
import Manifest from 'next-manifest/manifest'

<Head>
  <Manifest />
</Head>
```

if you want to update the values in tags, pass the content and href value to the component

```js
// pages/_document.js
import Manifest from 'next-manifest/manifest'

<Head>
  <Manifest
    // path for manifest will be deploying
    href='/static/manifest/manifest.json'
    // color for `theme-color`
    themeColor='#F0F0F0'
    // scale for `viewport` meta tag
    initialScale='1'
  />
</Head>
```

See [the example project](https://github.com/ragingwind/next-manifest/blob/master/examples/hello-pwa/pages/_document.js) to understand.

## License

MIT © [Jimmy Moon](https://ragingwind.me)
