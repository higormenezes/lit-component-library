import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

@customElement("wc-a11y-input")
export class Input extends LitElement {
  @property({ reflect: true })
  id: string = ""

  @property({ reflect: true, attribute: "aria-describedby" })
  ariaDescribedby: string = ""

  render() {
    return html`<input
      id="${this.id}"
      aria-describedby="${this.ariaDescribedby}"
    />`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-a11y-input": Input
  }
}

@customElement("wc-a11y-label")
export class Label extends LitElement {
  @property({ reflect: true })
  for: string = ""

  render() {
    return html`<label for="${this.for}"><slot></slot></label>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-a11y-label": Label
  }
}

@customElement("wc-a11y-helper-text")
export class HelperText extends LitElement {
  @property({ reflect: true })
  id: string = ""

  render() {
    return html`<div id="${this.id}"><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-a11y-helper-text": HelperText
  }
}

@customElement("wc-a11y-form-field")
export class FormField extends LitElement {
  render() {
    return html`<div><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-a11y-form-field": FormField
  }
}
