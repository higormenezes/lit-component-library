import type { Meta, StoryObj } from "@storybook/web-components"

import "./Logo"

type LogoProps = HTMLElementTagNameMap["wc-top-nav-logo"]

const meta = {
  title: "UI/TopNavigation/Logo",
  tags: ["autodocs"],
  component: "wc-top-nav-logo",
} satisfies Meta<LogoProps>

export default meta
type Story = StoryObj<LogoProps>

export const Default: Story = {}
