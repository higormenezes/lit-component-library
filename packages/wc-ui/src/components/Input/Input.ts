import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

import {} from "../FormField/FormField"

@customElement("wc-input")
export class Input extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: false,
  }

  static styles = css`
    :host {
      display: contents;
    }

    :host > .wc-input {
      all: unset;
      box-sizing: border-box;
      cursor: auto;
      width: 100%;

      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--wc-color-text-default);

      &::placeholder {
        color: var(--wc-color-text-subtle);
      }

      height: 40px;
      border-radius: 3px;
      padding: 0 var(--wc-space-100);

      background: var(--wc-color-background-input-default);
      border: 2px solid var(--wc-color-border-input);

      transition:
        background 150ms,
        color 150ms,
        border 150ms;

      &:hover {
        background: var(--wc-color-background-input-hovered);
      }
      &:focus {
        border-color: var(--wc-color-border-focused);
        background: var(--wc-color-background-input-pressed);
      }
    }
  `

  @property({ type: String, reflect: true })
  slot: string = "wc-input-element"

  @property({ type: String, reflect: true, attribute: "aria-describedby" })
  ariaDescribedby: string = "helper-text"

  render() {
    const classes = classMap({
      "wc-input": true,
    })

    return html`<input
      class="${classes}"
      placeholder="Placeholder"
      aria-describedby="${this.ariaDescribedby}"
    />`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-input": Input
  }
}
