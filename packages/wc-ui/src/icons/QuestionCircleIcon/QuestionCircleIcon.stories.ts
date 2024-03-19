import type { Meta, StoryObj } from "@storybook/web-components"

import "./QuestionCircleIcon"

type QuestionCircleIconProps = HTMLElementTagNameMap["wc-question-circle-icon"]

const meta = {
  title: "Icons/QuestionCircleIcon",
  tags: ["autodocs"],
  component: "wc-question-circle-icon",
} satisfies Meta<QuestionCircleIconProps>

export default meta
type Story = StoryObj<QuestionCircleIconProps>

export const Default: Story = {}
