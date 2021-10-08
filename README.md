# [ChromeExtensions] Copy Toggl Track Today's Reports to Clipboard

## motivation
- 業務における日報作業時間を短縮するため
- フロントエンド周辺の技術について学習するため

## Topics I want to learn

- [Chrome Extensions](https://developer.chrome.com/docs/extensions/reference/)
  - Manifest v3
- [webpack5](https://webpack.js.org/)
- [Toggl Reports API v2](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)
- [React 17.x](https://ja.reactjs.org/)
- [Material UI v5](https://mui.com/)
- [TypeScript 4.x](https://www.typescriptlang.org/)

## Debug

- options.html
  - `chrome-extension://aabhhgaagifekhoknmnhpjpedldfmdpc/options.html`

## Requirement

```
node v16.3.0
npm  v7.15.1
```

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
