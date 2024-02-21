<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-highlight-words&background=tiles&project=%20" alt="solid-highlight-words">
</p>

# solid-highlight-words

>

[![size](https://img.shields.io/bundlephobia/minzip/solid-highlight-words?style=for-the-badge)](https://bundlephobia.com/package/solid-highlight-words)
[![size](https://img.shields.io/npm/v/solid-highlight-words?style=for-the-badge)](https://www.npmjs.com/package/solid-highlight-words)
![npm](https://img.shields.io/npm/dw/solid-highlight-words?style=for-the-badge)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

[download-image]: https://img.shields.io/npm/dm/solid-highlight-words.svg
[download-url]: https://npmjs.org/package/solid-highlight-words

[![solid-highlight-words](https://nodei.co/npm/solid-highlight-words.png)](https://npmjs.org/package/solid-highlight-words)

Solid component to highlight words within a larger body of text. Based on [react-highlight-words](https://github.com/bvaughn/react-highlight-words)

Check out a demo [here](https://solid-highlight-words.pages.dev).

## Usage

Install it:

```bash
npm i solid-highlight-words
# or
yarn add solid-highlight-words
# or
pnpm add solid-highlight-words
```

To use it, just provide it with an array of search terms and a body of text to highlight.

[Try this example in Code Sandbox.](https://codesandbox.io/p/sandbox/elated-dubinsky-nxrpvj)

```jsx
import { createRoot } from "solid-js";
import { Highlighter } from "solid-highlight-words";

const root = createRoot(document.getElementById("root"));
root.render(
  <Highlighter
    highlightClass="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  />
);
```

And the `Highlighter` will mark all occurrences of search terms within the text:

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://cloud.githubusercontent.com/assets/29597/11914033/e3c319f6-a629-11e5-896d-1a5ce22c9ea2.png">

## Props

| Property           | Type                        | Required? | Description                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | --------------------------- | :-------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `activeClass`      | String                      |           | The class name to be applied to an active match. Use along with `activeIdx`                                                                                                                                                                                                                                                                                        |
| `activeIdx`        | Number                      |           | Specify the match index that should be actively highlighted. Use along with `activeClass`                                                                                                                                                                                                                                                                          |
| `activeStyle`      | Object                      |           | The inline style to be applied to an active match. Use along with `activeIdx`                                                                                                                                                                                                                                                                                      |
| `autoEscape`       | Boolean                     |           | Escape characters in `searchWords` which are meaningful in regular expressions                                                                                                                                                                                                                                                                                     |
| `class`            | String                      |           | CSS class name applied to the outer/wrapper `<span>`                                                                                                                                                                                                                                                                                                               |
| `caseSensitive`    | Boolean                     |           | Search should be case sensitive; defaults to `false`                                                                                                                                                                                                                                                                                                               |
| `findChunks`       | Function                    |           | Use a custom function to search for matching chunks. This makes it possible to use arbitrary logic when looking for matches. See the default `findChunks` function in [highlight-words-core](https://github.com/bvaughn/highlight-words-core) for signature. Have a look at the [custom findChunks example](https://codesandbox.io/s/k20x3ox31o) on how to use it. |
| `highlightClass`   | String or Object            |           | CSS class name applied to highlighted text or object mapping search term matches to class names.                                                                                                                                                                                                                                                                   |
| `highlightStyle`   | Object                      |           | Inline styles applied to highlighted text                                                                                                                                                                                                                                                                                                                          |
| `highlightTag`     | Node or String              |           | Type of tag to wrap around highlighted matches. Defaults to `mark` but can also be a Solid ValidComponent                                                                                                                                                                                                                                                          |
| `sanitize`         | Function                    |           | Process each search word and text to highlight before comparing (eg remove accents); signature `(text: string): string`                                                                                                                                                                                                                                            |
| `searchWords`      | Array<String &#124; RegExp> |     ✓     | Array of search words. String search terms are automatically cast to RegExps unless `autoEscape` is true.                                                                                                                                                                                                                                                          |
| `textToHighlight`  | String                      |     ✓     | Text to highlight matches in                                                                                                                                                                                                                                                                                                                                       |
| `unhighlightClass` | String                      |           | CSS class name applied to unhighlighted text                                                                                                                                                                                                                                                                                                                       |
| `unhighlightStyle` | Object                      |           | Inline styles applied to unhighlighted text                                                                                                                                                                                                                                                                                                                        |
| `unhighlightTag`   | Node or String              |           | Type of tag applied to unhighlighted parts. Defaults to `span` but can also be a Solid ValidComponent                                                                                                                                                                                                                                                              |
| \*                 | any                         |           | Any other props (such as `title` or `data-*`) are applied to the outer/wrapper `<span>`                                                                                                                                                                                                                                                                            |

## Custom highlight tag

By default, this component uses an HTML Mark Text element (`<mark>`) to wrap matched text, but you can inject a custom
tag using the `highlightTag` property. This tag should be a Solid ValidComponent that accepts the following properties:

| Property       | Type   | Description            |
| -------------- | ------ | ---------------------- |
| `children`     | String | Text to be highlighted |
| `highlightIdx` | Number | Index of matched text  |

For example:

```js
const Highlight = ({ children, highlightIdx }) => (
  <strong class="highlighted-text">{children}</strong>
);
```

## License

MIT License - fork, modify and use however you want.
