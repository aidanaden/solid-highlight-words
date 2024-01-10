import latinize from "latinize";
import { Component, createEffect, createMemo, createSignal } from "solid-js";

import { Highlighter } from "../../src";
import "./app.css";

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

  createEffect(() => {
    console.log({
      searchText: searchText(),
      textToHighlight: textToHighlight(),
      activeIdx: activeIdx(),
      caseSensitive: caseSensitive(),
    });
  });
  return (
    <div>
      <div class={"Row"}>
        <div class={"FirstColumn"}>
          <h4 class={"Header"}>Search terms</h4>
          <input
            class={"Input"}
            name="searchTerms"
            value={searchText()}
            onInput={(event) => setSearchText(event.target.value)}
          />
        </div>
        <div class={"SecondColumn"}>
          <h4 class={"Header"}>Active Index</h4>
          <input
            class={"Input"}
            name="activeIndex"
            value={activeIdx()}
            onInput={(event) => setActiveIdx(parseInt(event.target.value))}
            type="number"
          />
        </div>
        <div class={"SecondColumn"}>
          <h4 class={"Header"}>Case Sensitive?</h4>
          <input
            checked={caseSensitive()}
            class={"Input"}
            name="caseSensitive"
            onInput={(event) => setCaseSensitive(event.target.checked)}
            type="checkbox"
          />
        </div>
      </div>

      <h4 class={"Header"}>Body of Text</h4>
      <textarea
        class={"Input"}
        name="textToHighlight"
        value={textToHighlight()}
        onInput={(event) => setTextToHighlight(event.target.value)}
      />

      <h4 class={"Header"}>Output</h4>

      <Highlighter
        activeIdx={activeIdx()}
        activeClass={"Active"}
        caseSensitive={caseSensitive()}
        highlightClass={"Highlight"}
        sanitize={latinize}
        searchWords={searchWords()}
        textToHighlight={textToHighlight()}
      />

      <p class={"Footer"}>
        <a href="https://github.com/aidanaden/solid-highlight-words/blob/main/dev/src/app.tsx">
          View the source
        </a>
      </p>
    </div>
  );
};

export default HighlighterExample;
