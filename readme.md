# next-manifest

> Next.js plugin for [Web Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and PWA

# Updates

- After 3.x, icon generating is deprecated because of `worker_threads` is not supported on now platform.

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
const defaults = {
  // next-manifest options
  output: './static/', // The folder where the manifest will be generated.
  // manifest options
  name: 'PWA',
  icons: [
    {
      "src": "/static/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
module.exports = withManifest({
  manifest: {
    ...defaults
  }
});
```

## manifest.json

After build is over without errors, `manifest.json` will be created at `output`

## Deploying a manifest with more meta for PWA

Web manifest must be declared in your HTML pages using a link tag at the head of your document. Not only manifest link, also both of `meta`, `viewport` and `theme-color` will be needed for your PWA, like below:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="manifest" href="/static/manifest/manifest.json" />
```

for your convenience, this plugin supports `Manifest` component. You can place `Manifest` component under `<Head>` component in `_document.js` with props.

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

MIT © [Jimmy Moon](https://jimmymoon.dev)
