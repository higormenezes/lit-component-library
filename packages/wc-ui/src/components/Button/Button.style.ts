import { css } from "lit"

export const buttonDefaultStyle = css`
  & {
    background: var(--wc-color-background-neutral-default);
    color: var(--wc-color-text-default);

    &:hover {
      background: var(--wc-color-background-neutral-hovered);
      color: var(--wc-color-text-default);
    }
    &:active {
      background: var(--wc-color-background-neutral-pressed);
      color: var(--wc-color-text-default);
    }
  }
`

export const buttonPrimaryStyle = css`
  & {
    background: var(--wc-color-background-brand-bold-default);
    color: var(--wc-color-text-inverse);

    &:hover {
      background: var(--wc-color-background-brand-bold-hovered);
      color: var(--wc-color-text-inverse);
    }
    &:active {
      background: var(--wc-color-background-brand-bold-pressed);
      color: var(--wc-color-text-inverse);
    }
  }
`

export const buttonSubtleStyle = css`
  & {
    background: transparent;
    color: var(--wc-color-text-default);

    &:hover {
      background: var(--wc-color-background-neutral-subtle-hovered);
      color: var(--wc-color-text-default);
    }
    &:active {
      background: var(--wc-color-background-neutral-subtle-pressed);
      color: var(--wc-color-text-default);
    }
  }
`

export const buttonLinkStyle = css`
  & {
    background: transparent;
    color: var(--wc-color-link-default);

    &:hover {
      background: transparent;
      color: var(--wc-color-link-default);
      text-decoration: underline;
    }
    &:active {
      background: transparent;
      color: var(--wc-color-link-pressed);
      text-decoration: underline;
    }
  }
`

export const buttonStyle = css`
  :host {
    display: contents;
  }

  :host .wc-button {
    appearance: none;
    margin: 0;
    border: 0;
    outline: 2px solid transparent;
    outline-offset: 5px;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.75px;

    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 var(--wc-space-150);
    border-radius: 3px;

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

      &.wc-button--default {
        ${buttonDefaultStyle};
      }
      &.wc-button--primary {
        ${buttonPrimaryStyle};
      }
      &.wc-button--subtle {
        ${buttonSubtleStyle};
      }
      &.wc-button--link {
        ${buttonLinkStyle};
      }
    }

    &:disabled {
      background: var(--wc-color-background-disabled);
      color: var(--wc-color-text-disabled);
    }
  }
`
