import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

import { formFieldStyle } from "./FormField.style"

@customElement("wc-form-field")
export class FormField extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: false,
  }

  static styles = formFieldStyle

  @property({ type: String, reflect: true })
  label: string = ""

  @property({ type: String, reflect: true, attribute: "help-text" })
  helpText: string = ""

  render() {
    const classes = classMap({
      "wc-form-field": true,
    })

    return html`
      <label class="${classes}">
        <div class="wc-form-field__label">${this.label}</div>
        <slot name="wc-input-element"></slot>
        <div class="wc-form-field__help-text" id="help-text">${this.label}</div>
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-form-field": FormField
  }
}
