import type { Meta, StoryObj } from "@storybook/web-components"

type ButtonProps = HTMLElementTagNameMap["wc-form-field"]

import "./forms"

const meta = {
  title: "a11y/forms",
  tags: ["autodocs"],
  component: "div",
  args: {
    innerHTML: `
    <wc-a11y-form-field>
      <wc-a11y-label for="input-id">Label</wc-a11y-label>
      <wc-a11y-input id="input-id" aria-describedby="helper-text-id"></wc-a11y-input>
      <wc-a11y-helper-text id="helper-text-id">Helper text</wc-a11y-helper-text>
    </wc-a11y-form-field>
    `,
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const WebComponents: Story = {}

export const Vanilla: Story = {
  args: {
    innerHTML: `
    <label for="input-id">Label</label>
    <input id="input-id" aria-describedby="helper-text-id"></input>
    <div id="helper-text-id">Helper text</div>
    `,
  },
}
