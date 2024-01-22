import latinize from "latinize";
import { Highlighter } from "solid-highlight-words";
import { Component, createMemo, createSignal } from "solid-js";

import "./main.css";

export const HighlighterExample: Component = () => {
  const [searchText, setSearchText] = createSignal("and or the");
  const [textToHighlight, setTextToHighlight] = createSignal(
    `When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.`,
  );
  const [activeIdx, setActiveIdx] = createSignal(-1);
  const [caseSensitive, setCaseSensitive] = createSignal(false);
  const searchWords = createMemo(() =>
    searchText()
      .split(/\s/)
      .filter((word) => word),
  );
  return (
    <div class="p-3">
      <div class="flex flex-row items-start gap-3">
        <div class="flex flex-col gap-1.5">
          <h4 class="text-lg">Search terms</h4>
          <input
            class="w-full border border-[#78909c] leading-[1.4] py-[0.3em] px-[0.5em] rounded-[0.3em] mb-[1em] text-[1em]"
            name="searchTerms"
            value={searchText()}
            onInput={(event) => setSearchText(event.target.value)}
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <h4 class="text-lg">Active Index</h4>
          <input
            class="w-full border border-[#78909c] leading-[1.4] py-[0.3em] px-[0.5em] rounded-[0.3em] mb-[1em] text-[1em]"
            name="activeIndex"
            value={activeIdx()}
            onInput={(event) => setActiveIdx(parseInt(event.target.value))}
            type="number"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <h4 class="text-lg">Case Sensitive?</h4>
          <input
            checked={caseSensitive()}
            class="w-full border border-[#78909c] leading-[1.4] py-[0.3em] px-[0.5em] rounded-[0.3em] mb-[1em] text-[1em]"
            name="caseSensitive"
            onInput={(event) => setCaseSensitive(event.target.checked)}
            type="checkbox"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <h4 class="text-lg">Body of Text</h4>
        <textarea
          class="w-full border border-[#78909c] leading-[1.4] py-[0.3em] px-[0.5em] rounded-[0.3em] mb-[1em] text-[1em]"
          name="textToHighlight"
          value={textToHighlight()}
          onInput={(event) => setTextToHighlight(event.target.value)}
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <h4 class="text-lg">Output</h4>

        <Highlighter
          activeIdx={activeIdx()}
          activeClass="bg-[#f48f42]"
          caseSensitive={caseSensitive()}
          highlightClass="bg-[#ffd54f"
          sanitize={latinize}
          searchWords={searchWords()}
          textToHighlight={textToHighlight()}
        />

        <p class="mb-0">
          <a href="https://github.com/aidanaden/solid-highlight-words/blob/main/dev/src/app.tsx">
            View the source
          </a>
        </p>
      </div>
    </div>
  );
};

export default HighlighterExample;
