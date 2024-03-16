import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

import { buttonStyle } from "./Button.style"

type TAppearance = "default" | "primary" | "subtle" | "link"

@customElement("wc-button")
export class WCButton extends LitElement {
  @property()
  appearance: TAppearance = "default"

  @property({ type: Boolean })
  disabled = false

  static styles = buttonStyle

  render() {
    return html`<button class="${this.appearance}" ?disabled="${this.disabled}">
      <slot></slot>
    </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-button": WCButton
  }
}
