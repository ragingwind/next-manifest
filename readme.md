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
const withManifest = require('next-manifest');

module.exports = withManifest({
  manifest: {
    // all of manifest properties.
    ...manifestProperties,
    // if src value is exist, icon image will be generated from src image, and ovwewritten
    // icons value exist in the properties. if you want to keep your own icons path? do not pass
    // src path to this plugin
    icons: {
      // source image path, to generate applications icons in 192x192, 512x512 sizes for manifest.
      src: './assets/pwa-icon.png',
      // default is true, cache images until the hash value of source image has changed
      // if false, generating new icon images while every build time.
      cache: true
    }
  }
});
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
<link rel="manifest" href="/static/manifest/manifest.json" />
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
