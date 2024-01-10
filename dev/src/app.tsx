import latinize from "latinize";
import { Highlighter } from "solid-highlight-words";
import { Component, createMemo, createSignal } from "solid-js";

import styles from "./app.module.css";

export const HighlighterExample: Component = () => {
  const [searchText, setSearchText] = createSignal("and or the");
  const [textToHighlight, setTextToHighlight] = createSignal(
    `When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.`
  );
  const [activeIdx, setActiveIdx] = createSignal(-1);
  const [caseSensitive, setCaseSensitive] = createSignal(false);
  const searchWords = createMemo(() =>
    searchText()
      .split(/\s/)
      .filter((word) => word)
  );
  return (
    <div>
      <div class={styles.Row}>
        <div class={styles.FirstColumn}>
          <h4 class={styles.Header}>Search terms</h4>
          <input
            class={styles.Input}
            name="searchTerms"
            value={searchText()}
            onInput={(event) => setSearchText(event.target.value)}
          />
        </div>
        <div class={styles.SecondColumn}>
          <h4 class={styles.Header}>Active Index</h4>
          <input
            class={styles.Input}
            name="activeIndex"
            value={activeIdx()}
            onInput={(event) => setActiveIdx(parseInt(event.target.value))}
            type="number"
          />
        </div>
        <div class={styles.SecondColumn}>
          <h4 class={styles.Header}>Case Sensitive?</h4>
          <input
            checked={caseSensitive()}
            class={styles.Input}
            name="caseSensitive"
            onInput={(event) => setCaseSensitive(event.target.checked)}
            type="checkbox"
          />
        </div>
      </div>

      <h4 class={styles.Header}>Body of Text</h4>
      <textarea
        class={styles.Input}
        name="textToHighlight"
        value={textToHighlight()}
        onInput={(event) => setTextToHighlight(event.target.value)}
      />

      <h4 class={styles.Header}>Output</h4>

      <Highlighter
        activeIdx={activeIdx()}
        activeClass={styles.Active}
        caseSensitive={caseSensitive()}
        highlightClass={styles.Highlight}
        sanitize={latinize}
        searchWords={searchWords()}
        textToHighlight={textToHighlight()}
      />

      <p class={styles.Footer}>
        <a href="https://github.com/aidanaden/solid-highlight-words/blob/main/dev/src/app.tsx">
          View the source
        </a>
      </p>
    </div>
  );
};

export default HighlighterExample;
