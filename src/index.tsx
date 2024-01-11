import { Chunk, FindAllArgs, findAll } from "highlight-words-core";
import {
  Component,
  ComponentProps,
  For,
  ValidComponent,
  createMemo,
  createSignal,
  mergeProps,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

type Props = FindAllArgs & {
  activeIdx: number;
  activeClass?: ComponentProps<"span">["class"];
  activeStyle?: ComponentProps<"span">["style"];
  highlightClass?: ComponentProps<"span">["class"];
  highlightStyle?: ComponentProps<"span">["style"];
  highlightTag?: ValidComponent;
  unhighlightClass?: ComponentProps<"span">["class"];
  unhighlightStyle?: ComponentProps<"span">["style"];
  unhighlightTag?: ValidComponent;
} & ComponentProps<"span">;

/**
 * Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
 * This function returns an array of strings and <span>s (wrapping highlighted words).
 */
export const Highlighter: Component<Props> = (_props) => {
  let highlightedIdx = -1;
  const props = mergeProps(
    {
      activeIdx: -1,
      activeClass: "",
      caseSensitive: false,
      highlightTag: "mark",
      highlightClass: "",
      highlightStyle: {},
      unhighlightTag: "span",
      unhighlightClass: "",
    },
    _props
  );
  const [, rest] = splitProps(props, [
    "activeIdx",
    "activeClass",
    "activeStyle",
    "caseSensitive",
    "highlightTag",
    "highlightClass",
    "highlightStyle",
    "unhighlightTag",
    "unhighlightClass",
    "autoEscape",
    "caseSensitive",
    "sanitize",
    "searchWords",
    "textToHighlight",
    "findChunks",
  ]);
  const chunks = createMemo<Chunk[]>(() => {
    return findAll({
      autoEscape: props.autoEscape,
      caseSensitive: props.caseSensitive,
      findChunks: props.findChunks,
      sanitize: props.sanitize,
      searchWords: props.searchWords,
      textToHighlight: props.textToHighlight,
    });
  });
  return (
    <span {...rest}>
      <For each={chunks()}>
        {(chunk, i) => {
          if (i() === 0) {
            highlightedIdx = 0;
          }
          if (chunk.highlight) {
            highlightedIdx++;
          }
          const [currHighlightIdx] = createSignal(highlightedIdx);
          return (
            <Dynamic
              component={
                chunk.highlight ? props.highlightTag : props.unhighlightTag
              }
              class={
                chunk.highlight ? props.highlightClass : props.unhighlightClass
              }
              classList={{
                [props.activeClass]:
                  props.activeIdx === currHighlightIdx() && chunk.highlight,
              }}
              style={
                props.activeStyle &&
                currHighlightIdx() === props.activeIdx &&
                chunk.highlight
                  ? typeof props.highlightStyle === "object" &&
                    typeof props.activeStyle === "object"
                    ? { ...props.highlightStyle, ...props.activeStyle }
                    : typeof props.highlightStyle === "string" &&
                      typeof props.activeStyle === "string"
                    ? `${props.highlightStyle} ${props.activeStyle}`
                    : ""
                  : !!props.highlightStyle
                  ? props.highlightStyle
                  : undefined
              }
            >
              {props.textToHighlight.substr(
                chunk.start,
                chunk.end - chunk.start
              )}
            </Dynamic>
          );
        }}
      </For>
    </span>
  );
};
