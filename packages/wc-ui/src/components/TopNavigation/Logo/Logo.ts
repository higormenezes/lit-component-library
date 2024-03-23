import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

import "../../../logo/NonfluentLogo/NonfluentLogo"

@customElement("wc-top-nav-logo")
export class TopNavAppSwitch extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }
  `

  @property({ type: String, reflect: true })
  slot: string = "wc-top-nav-logo"

  render() {
    return html`<wc-nonfluent-logo></wc-nonfluent-logo>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav-logo": TopNavAppSwitch
  }
}
