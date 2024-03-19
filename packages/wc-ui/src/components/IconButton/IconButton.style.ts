import { css } from "lit"

export const iconButtonStyle = css`
  :host {
    display: contents;
  }

  :host .wc-icon-button {
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 2px solid transparent;
    outline-offset: 5px;

    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;

    transition:
      background 150ms,
      color 150ms;

    &:not(:disabled) {
      cursor: pointer;

      &:focus {
        transition:
          background 150ms,
          color 150ms,
          outline-offset 150ms ease-out,
          outline-width 150ms ease-out;
        outline: 2px solid var(--wc-color-border-focused);
        outline-offset: 2px;
      }

      background: var(--wc-color-background-neutral-subtle-default);
      color: var(--wc-color-icon-default);
      &.wc-icon-button--selected {
        background: var(--wc-color-background-selected-default);
        color: var(--wc-color-icon-selected);
      }

      &:hover {
        background: var(--wc-color-background-neutral-subtle-hovered);
        color: var(--wc-color-icon-default);
        &.wc-icon-button--selected {
          background: var(--wc-color-background-selected-hovered);
          color: var(--wc-color-icon-selected);
        }
      }
      &:active {
        background: var(--wc-color-background-neutral-subtle-pressed);
        color: var(--wc-color-icon-default);
        &.wc-icon-button--selected {
          background: var(--wc-color-background-selected-pressed);
          color: var(--wc-color-icon-selected);
        }
      }
    }

    &:disabled {
      background: var(--wc-color-background-disabled);
      color: var(--wc-color-text-disabled);
    }
  }
`
