import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { classMap } from "lit/directives/class-map.js"

import { primaryLinkStyle } from "./PrimaryLink.style"

@customElement("wc-top-nav-primary-link")
export class PrimaryLink extends LitElement {
  static styles = primaryLinkStyle

  @property({ type: String, reflect: true })
  href?: string

  @property({ type: Boolean, reflect: true })
  selected = false

  render() {
    const classes = classMap({
      "wc-top-nav-primary-link": true,
      "wc-top-nav-primary-link--selected": this.selected,
    })

    return html`
      <a class="${classes}" href="${ifDefined(this.href)}">
        <div class="wc-top-nav-primary-link__content-box">
          <slot></slot>
        </div>
      </a>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav-primary-link": PrimaryLink
  }
}
