import type { Meta, StoryObj } from "@storybook/web-components"

import "./AppSwitcherIcon"

type AppSwitcherIconProps = HTMLElementTagNameMap["wc-app-switcher-icon"]

const meta = {
  title: "Icons/AppSwitcherIcon",
  tags: ["autodocs"],
  component: "wc-app-switcher-icon",
} satisfies Meta<AppSwitcherIconProps>

export default meta
type Story = StoryObj<AppSwitcherIconProps>

export const Default: Story = {}
