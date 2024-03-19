import { css } from "lit"

export const primaryLinkStyle = css`
  :host {
    display: contents;
  }

  :host .wc-top-nav-primary-link {
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    outline: none;
    cursor: pointer;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.75px;

    position: relative;
    isolation: isolate;
    height: 56px;
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    & .wc-top-nav-primary-link__content-box {
      outline: 2px solid transparent;
      outline-offset: 5px;

      height: 32px;
      border-radius: 3px;
      padding: 0 var(--wc-space-75);
      display: grid;
      place-items: center;

      transition:
        background 150ms,
        color 150ms;

      background: var(--wc-color-background-neutral-subtle-default);
      color: var(--wc-color-text-subtle);
    }

    &.wc-top-nav-primary-link--selected {
      &::after {
        content: "";
        position: absolute;
        inset-block-end: 0;
        inset-inline: 4px;
        height: 3px;
        border-start-start-radius: 1px;
        border-start-end-radius: 1px;
        background: var(--wc-color-border-selected);
      }

      & .wc-top-nav-primary-link__content-box {
        background: transparent;
        color: var(--wc-color-text-selected);
      }
    }

    &:focus .wc-top-nav-primary-link__content-box {
      transition:
        background 150ms,
        color 150ms,
        outline-offset 150ms ease-out,
        outline-width 150ms ease-out;
      outline: 2px solid var(--wc-color-border-focused);
      outline-offset: 2px;
    }

    &:hover .wc-top-nav-primary-link__content-box {
      background: var(--wc-color-background-neutral-subtle-hovered);
      color: var(--wc-color-text-subtle);
    }

    &:active .wc-top-nav-primary-link__content-box {
      background: var(--wc-color-background-neutral-subtle-pressed);
      color: var(--wc-color-text-subtle);
    }
  }
`
