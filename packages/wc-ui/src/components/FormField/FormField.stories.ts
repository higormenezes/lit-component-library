import type { Meta, StoryObj } from "@storybook/web-components"

import "./FormField"
import "../Input/Input"

type ButtonProps = HTMLElementTagNameMap["wc-form-field"]

const meta = {
  title: "UI/FormField",
  tags: ["autodocs"],
  component: "wc-form-field",
  args: {
    innerHTML: `<wc-input />`,
    label: "Form field label",
    helpText: "Help text",
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Default1: Story = {}
