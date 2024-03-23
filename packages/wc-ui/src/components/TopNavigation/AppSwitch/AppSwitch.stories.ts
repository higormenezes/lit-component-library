import type { Meta, StoryObj } from "@storybook/web-components"

import "./AppSwitch"

type AppSwitchProps = HTMLElementTagNameMap["wc-top-nav-app-switch"]

const meta = {
  title: "UI/TopNavigation/AppSwitch",
  tags: ["autodocs"],
  component: "wc-top-nav-app-switch",
} satisfies Meta<AppSwitchProps>

export default meta
type Story = StoryObj<AppSwitchProps>

export const Default: Story = {}
