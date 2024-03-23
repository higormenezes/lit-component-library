import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

@customElement("wc-top-nav-link-list")
export class TopNavAppSwitch extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }

    :host .wc-top-nav-link-list {
      margin: 0;
      list-style: none;

      display: inline-flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      gap: var(--wc-space-100);

      padding: 0 var(--wc-space-50);
    }
  `

  @property({ type: String, reflect: true })
  slot: string = "wc-top-nav-link-list"

  render() {
    const classes = classMap({
      "wc-top-nav-link-list": true,
    })

    return html`
      <ul role="list" class="${classes}">
        <slot name="wc-top-nav-link"></slot>
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav-link-list": TopNavAppSwitch
  }
}
