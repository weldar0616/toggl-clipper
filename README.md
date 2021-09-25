# [ChromeExtensions] Copy Toggl Track Today's Reports to Clipboard

## Topics I want to learn

- [ChromeExtensions](https://developer.chrome.com/docs/extensions/reference/)
- [webpack5](https://webpack.js.org/)
- [Toggl Reports API v2](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)
- [React](https://ja.reactjs.org/)
- [Material UI](https://material-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Debug

- options.html
  - `chrome-extension://aabhhgaagifekhoknmnhpjpedldfmdpc/options.html`

## Install & Build

```
git clone https://github.com/weldar0616/toggl-clipper.git
cd toggl-clipper
npm i -g webpack-cli
npm i
webpack
```

## Usage
### Import Extension
- open chrome://extensions
- click 「パッケージ化されていない拡張機能を読み込む」
- select `toggl-clipper/dist`
### Set Toggl API Token
- open https://track.toggl.com/profile
- copy ApiToken
- open 「Toggl Clipper」's options
- Paste ApiToken to InputField & Click Save Button
- All you have to do is run Toggl Clipper and press 'クリップボードにコピー'
