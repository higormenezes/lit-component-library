import type { Meta, StoryObj } from "@storybook/web-components"

import "./IconButton"
import "../../icons/QuestionCircleIcon/QuestionCircleIcon"

type IconButtonProps = HTMLElementTagNameMap["wc-icon-button"]

const meta = {
  title: "UI/IconButton",
  tags: ["autodocs"],
  component: "wc-icon-button",
  args: {
    innerHTML: "<wc-question-circle-icon />",
  },
} satisfies Meta<IconButtonProps>

export default meta
type Story = StoryObj<IconButtonProps>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
