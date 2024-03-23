import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { classMap } from "lit/directives/class-map.js"

import { linkStyle } from "./Link.style"

@customElement("wc-top-nav-link")
export class Link extends LitElement {
  static styles = linkStyle

  constructor() {
    super()
  }

  @property({ type: String, reflect: true })
  slot: string = "wc-top-nav-link"

  @property({ type: String, reflect: true })
  href?: string

  @property({ type: Boolean, reflect: true })
  selected = false

  render() {
    const classes = classMap({
      "wc-top-nav-link": true,
      "wc-top-nav-link--selected": this.selected,
    })

    return html`
      <li>
        <a class="${classes}" href="${ifDefined(this.href)}">
          <div class="wc-top-nav-link__content-box">
            <slot></slot>
          </div>
        </a>
      </li>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav-link": Link
  }
}
