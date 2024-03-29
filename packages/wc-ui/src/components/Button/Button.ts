import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

import { buttonStyle } from "./Button.style"

type TAppearance = "default" | "primary" | "subtle" | "link"

@customElement("wc-button")
export class WCButton extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }
  static styles = buttonStyle

  @property({ reflect: true })
  appearance: TAppearance = "default"

  @property({ type: Boolean, reflect: true })
  disabled = false

  render() {
    const classes = classMap({
      "wc-button": true,
      [`wc-button--${this.appearance}`]: true,
    })

    return html`<button class="${classes}" ?disabled="${this.disabled}">
      <slot></slot>
    </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-button": WCButton
  }
}
