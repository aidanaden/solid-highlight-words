# solid-highlight-words

>

[![size](https://img.shields.io/bundlephobia/minzip/solid-highlight-words?style=for-the-badge)](https://bundlephobia.com/package/solid-highlight-words)
[![size](https://img.shields.io/npm/v/solid-highlight-words?style=for-the-badge)](https://www.npmjs.com/package/solid-highlight-words)
![npm](https://img.shields.io/npm/dw/solid-highlight-words?style=for-the-badge)

[download-image]: https://img.shields.io/npm/dm/solid-highlight-words.svg
[download-url]: https://npmjs.org/package/solid-highlight-words

[![solid-top-loading-bar](https://nodei.co/npm/solid-highlight-words.png)](https://npmjs.org/package/solid-highlight-words)

## Documentation

### Example

TBA

### Installation

- using npm

```bash
npm install --save solid-highlight-words
```

- using pnpm

```bash
pnpm add solid-highlight-words
```

### Usage

#### Importing component

```js
import Highlight from "solid-highlight-words";
```

#### Adding styles

Choose the [theme](https://highlightjs.org/static/demo/) for syntax highlighting and add corresponding styles of highlight.js, either as a stylesheet or by importing in your `index.tsx` file

```css
  <link rel="stylesheet" href="/path/to/styles/theme-name.css">
```

```js
import "highlight.js/styles/stackoverflow-light.css";
```

The styles will most likely be in `node_modules/highlight.js/styles` folder.

#### Properties

| Property       | Type               | Default | Description                                                                    |
| :------------- | :----------------- | :------ | :----------------------------------------------------------------------------- |
| class          | string             |         | Custom css classes to be included                                              |
| language       | string (optional)  | `''`    | Language of code to be highlighted (will be detected automatically by default) |
| autoDetect     | boolean (optional) | `true`  | Whether to automatically detect the language of code to be highlighted         |
| ignoreIllegals | boolean (optional) | `true`  | Whether to ignore illegal characters in the code to be highlighted             |

#### Syntax highlighting of code snippet

Code snippet that requires syntax highlighting should be passed as children to Highlight component in string format.

```js
<Highlight autoDetect={true}> {"function foo() { return 'bar' }"} </Highlight>
```

```js
<Highlight autoDetect={false} language={"js"}>
  {"function foo() { return 'bar' }"}
</Highlight>
```
