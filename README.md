# unit-convert-loader
Webpack loader for converting CSS unit



### Install

```shell
npm install unit-convert-loader
```



### Usage

Within your webpack configuration object, you'll need to add the unit-covert-loader to the list of modules, like so:

```javascript
module: {
  rules: [
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'unit-covert-loader',
        options: {
          UIWidth: 640,
          targetUnit: 'rem'
        }
      }
    }
  ]
}
```



### Options

- UIWidth: optional, default `750`. The Design Width.
- targetUnit: optional, default `vw`. The unit you want to convert to, it can be `vw` or `rem`.
- minPixelValue: optional, default `1`. The minimum value you set, all value less than it won't be converted.
- unitPercesion: optional, default `3`. Number of decimal places retained after conversion.
- rem: optional, default `null`. The font size of html node, necessary when targetUnit is `rem`.