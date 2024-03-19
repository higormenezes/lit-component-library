import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

import { iconButtonStyle } from "./IconButton.style"

@customElement("wc-icon-button")
export class IconButton extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }
  static styles = iconButtonStyle

  @property({ type: Boolean, reflect: true })
  selected = false

  @property({ type: Boolean, reflect: true })
  disabled = false

  render() {
    const classes = classMap({
      "wc-icon-button": true,
      "wc-icon-button--selected": this.selected,
    })

    return html`<button class="${classes}" ?disabled="${this.disabled}">
      <slot></slot>
    </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-icon-button": IconButton
  }
}
