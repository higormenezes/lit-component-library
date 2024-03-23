import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

import "../../IconButton/IconButton"
import "../../../icons/AppSwitcherIcon/AppSwitcherIcon"

@customElement("wc-top-nav-app-switch")
export class TopNavAppSwitch extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }
  `

  @property({ type: String, reflect: true })
  slot: string = "wc-top-nav-app-switch"

  render() {
    return html`
      <wc-icon-button>
        <wc-app-switcher-icon></wc-app-switcher-icon>
      </wc-icon-button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav-app-switch": TopNavAppSwitch
  }
}
