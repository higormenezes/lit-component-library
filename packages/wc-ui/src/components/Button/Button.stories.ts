import type { Meta, StoryObj } from "@storybook/web-components"

import "./Button"
type ButtonProps = HTMLElementTagNameMap["lit-button"]

const meta = {
  title: "UI/Button",
  tags: ["autodocs"],
  component: "lit-button",
  args: {
    innerHTML: "Button",
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const AppearanceDefault: Story = {
  args: {
    appearance: "default",
  },
}

export const AppearancePrimary: Story = {
  args: {
    appearance: "primary",
  },
}

export const AppearanceSubtle: Story = {
  args: {
    appearance: "subtle",
  },
}

export const AppearanceLink: Story = {
  args: {
    appearance: "link",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
