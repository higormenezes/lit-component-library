import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("wc-app-switcher-icon")
export class AppSwitcherIcon extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
  `

  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 5.01C4 4.451 4.443 4 5.01 4H6.99C7.549 4 8 4.443 8 5.01V6.99C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01ZM4 11.01C4 10.452 4.443 10 5.01 10H6.99C7.548 10 8 10.443 8 11.01V12.99C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99V11.01ZM10 5.01C10 4.452 10.443 4 11.01 4H12.99C13.548 4 14 4.443 14 5.01V6.99C14 7.549 13.557 8 12.99 8H11.01C10.451 8 10 7.557 10 6.99V5.01ZM10 11.01C10 10.452 10.443 10 11.01 10H12.99C13.548 10 14 10.443 14 11.01V12.99C14 13.548 13.557 14 12.99 14H11.01C10.452 14 10 13.557 10 12.99V11.01ZM16 5.01C16 4.452 16.443 4 17.01 4H18.99C19.548 4 20 4.443 20 5.01V6.99C20 7.549 19.557 8 18.99 8H17.01C16.451 8 16 7.557 16 6.99V5.01ZM16 11.01C16 10.452 16.443 10 17.01 10H18.99C19.548 10 20 10.443 20 11.01V12.99C20 13.548 19.557 14 18.99 14H17.01C16.452 14 16 13.557 16 12.99V11.01ZM4 17.01C4 16.452 4.443 16 5.01 16H6.99C7.548 16 8 16.443 8 17.01V18.99C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99V17.01ZM10 17.01C10 16.452 10.443 16 11.01 16H12.99C13.548 16 14 16.443 14 17.01V18.99C14 19.548 13.557 20 12.99 20H11.01C10.452 20 10 19.557 10 18.99V17.01ZM16 17.01C16 16.452 16.443 16 17.01 16H18.99C19.548 16 20 16.443 20 17.01V18.99C20 19.548 19.557 20 18.99 20H17.01C16.452 20 16 19.557 16 18.99V17.01Z"
          fill="currentColor"
        />
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-app-switcher-icon": AppSwitcherIcon
  }
}
