import { css } from "lit"

export const formFieldStyle = css`
  :host .wc-form-field {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    & .wc-form-field__label {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      margin-block-end: var(--wc-space-50);
    }

    & .wc-form-field__help-text {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-block-start: var(--wc-space-50);
    }
  }
`
