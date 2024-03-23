import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("wc-top-nav")
export class TopNav extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      height: 56px;
      padding: 0 var(--wc-space-150);
      background: var(--wc-elevation-surface-default);
      border-block-end: 1px solid var(--wc-color-border-default);
    }

    :host .wc-top-nav__main-content {
      display: inline-flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      gap: var(--wc-space-150);
    }
  `

  render() {
    return html`
      <div class="wc-top-nav__main-content">
        <slot name="wc-top-nav-app-switch"></slot>
        <slot name="wc-top-nav-logo"></slot>
        <slot name="wc-top-nav-link-list"></slot>
      </div>
      <slot name="wc-top-nav-search"></slot>
      <slot name="wc-top-nav-widgets"></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-top-nav": TopNav
  }
}
