# eslint-plugin-ja

[![npm version](https://img.shields.io/npm/v/eslint-plugin-ja.svg)](https://www.npmjs.com/package/eslint-plugin-ja)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-ja.svg)](http://www.npmtrends.com/eslint-plugin-ja)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-ja.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-ja)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-ja.svg)](https://david-dm.org/mysticatea/eslint-plugin-ja)

[ESLint] のエラーメッセージを日本語化する非公式の実験的なプラグインです。

今のところモンキーパッチを使っています。

## ⤴️ 目的

[ESLint] のエラーメッセージを日本語化して、より広く使ってもらえるようにします。

## 💿 インストール

[npm] でインストールして `.eslintrc.*` ファイルにこのプラグインを利用する事を記述します。

```bash
npm install --save-dev eslint eslint-plugin-ja
```

```json
{
    "plugins": ["ja"]
    // 他はいつも通り。
}
```

### 要件

- [Node.js] v4.0.0 以上
- [ESLint] v4.17.0 以上

## 📖 使い方

特になし。  
普通に [ESLint] を利用して下さい。

## ⚠️ 既知の制限

現在日本語化されているルールは、[eslint/eslint#9648](https://github.com/eslint/eslint/pull/9648) で更新された`65`個だけです。

<details><summary>ルールの一覧を見る</summary>

- `accessor-pairs`
- `array-bracket-newline`
- `array-bracket-spacing`
- `array-callback-return`
- `array-element-newline`
- `arrow-body-style`
- `arrow-parens`
- `arrow-spacing`
- `block-scoped-var`
- `brace-style`
- `callback-return`
- `camelcase`
- `capitalized-comments`
- `class-methods-use-this`
- `comma-dangle`
- `comma-style`
- `complexity`
- `computed-property-spacing`
- `consistent-return`
- `consistent-this`
- `constructor-super`
- `curly`
- `default-case`
- `dot-location`
- `dot-notation`
- `eol-last`
- `eqeqeq`
- `no-alert`
- `no-array-constructor`
- `no-await-in-loop`
- `no-bitwise`
- `no-buffer-constructor`
- `no-caller`
- `no-case-declarations`
- `no-catch-shadow`
- `no-class-assign`
- `no-compare-neg-zero`
- `no-cond-assign`
- `no-confusing-arrow`
- `no-console`
- `no-const-assign`
- `no-constant-condition`
- `no-continue`
- `no-control-regex`
- `no-debugger`
- `no-delete-var`
- `no-div-regex`
- `no-dupe-args`
- `no-dupe-class-members`
- `no-dupe-keys`
- `no-duplicate-case`
- `no-else-return`
- `no-empty-character-class`
- `no-empty-function`
- `no-empty-pattern`
- `no-empty`
- `no-eq-null`
- `no-eval`
- `no-ex-assign`
- `no-extend-native`
- `no-extra-bind`
- `no-extra-boolean-cast`
- `no-extra-label`
- `no-extra-parens`
- `no-extra-semi`

</details>

## 📰 変更履歴

- [GitHub Releases](https://github.com/mysticatea/eslint-plugin-ja/releases)

## 🍻 貢献

- ご意見・ご感想は Issues までお願いします。

[ESLint]: https://eslint.org/
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
