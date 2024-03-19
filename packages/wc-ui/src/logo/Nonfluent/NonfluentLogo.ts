import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("wc-nonfluent-logo")
export class NonfluentLogo extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--wc-space-50);

      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1;
      letter-spacing: 0.75px;
      color: var(--wc-color-text-subtle);
    }

    :host svg {
      display: block;
      flex: 1 0 auto;
    }
  `

  render() {
    return html`
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1.123 5.247 C 0.961 5.547 0.746 5.874 0.585 6.147 C 0.423 6.393 0.504 6.72 0.773 6.883 L 4.27 9.065 C 4.539 9.229 4.861 9.147 5.023 8.874 C 5.157 8.629 5.345 8.329 5.534 8.002 C 6.932 5.683 8.304 5.956 10.832 7.183 L 14.302 8.847 C 14.571 8.983 14.893 8.847 15.028 8.574 L 16.696 4.756 C 16.803 4.483 16.696 4.156 16.427 4.047 C 15.7 3.693 14.248 3.011 12.93 2.356 C 8.196 0.065 4.189 0.202 1.123 5.247 Z"
          fill="url(#paint0_linear_14872_431)"
        ></path>
        <path
          d="M 15.929 12.512 C 16.091 12.212 16.306 11.885 16.467 11.612 C 16.628 11.367 16.548 11.039 16.279 10.876 L 12.782 8.694 C 12.513 8.53 12.191 8.612 12.029 8.885 C 11.895 9.13 11.706 9.43 11.518 9.758 C 10.12 12.076 8.748 11.803 6.22 10.576 L 2.777 8.885 C 2.508 8.748 2.185 8.885 2.051 9.158 L 0.383 12.976 C 0.276 13.249 0.383 13.576 0.652 13.685 C 1.378 14.039 2.831 14.721 4.149 15.376 C 8.855 17.694 12.863 17.558 15.929 12.512 Z"
          fill="url(#paint1_linear_14872_431)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_14872_431"
            x1="16.0812"
            y1="18.376"
            x2="5.43008"
            y2="12.3402"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0052CC" />
            <stop offset="0.9182" stop-color="#2380FB" />
            <stop offset="1" stop-color="#2684FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14872_431"
            x1="0.854842"
            y1="-0.173515"
            x2="11.5059"
            y2="5.86222"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0052CC" />
            <stop offset="0.9182" stop-color="#2380FB" />
            <stop offset="1" stop-color="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
      <span>Nonfluent</span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-nonfluent-logo": NonfluentLogo
  }
}
