# [ChromeExtensions] Copy Toggl Track Today's Reports to Clipboard

## 動機
- 業務における日報作業時間を短縮するため
- フロントエンド周辺の技術について学習するため

## 学びたいこと

- [Chrome Extensions](https://developer.chrome.com/docs/extensions/reference/)
  - Manifest v3
- [webpack5](https://webpack.js.org/)
- [Toggl Reports API v2](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)
- [React 17.x](https://ja.reactjs.org/)
- [Material UI v5](https://mui.com/)
- [TypeScript 4.x](https://www.typescriptlang.org/)

## メモ: デバッグ方法

- options.html
  - `chrome-extension://aabhhgaagifekhoknmnhpjpedldfmdpc/options.html`

## ビルド要件

```
node v16.3.0
npm  v7.15.1
```

## インストール & ビルド

```
git clone https://github.com/weldar0616/toggl-clipper.git
cd toggl-clipper && npm i
npx webpack
```

## 使い方
### 拡張機能をインポート
- chrome://extensions にアクセス
- パッケージ化されていない拡張機能を読み込む をクリック
- `patu/to/toggl-clipper/dist` を選択
### Toggl API Token を設定
- https://track.toggl.com/profile にアクセスし、ApiToken と workspaceID を取得する
- Toggl Clipper のオプションを開き、ApiToken と workspaceID 入力し保存ボタンを押下する

拡張機能をクリックし、ポップアップの「クリップボードにコピー」ボタンを押下すると、当日分の計測結果が固定のフォーマットでクリップボードにコピーされます
