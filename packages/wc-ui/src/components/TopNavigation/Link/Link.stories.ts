import type { Meta, StoryObj } from "@storybook/web-components"

import "./Link"

type LinkProps = HTMLElementTagNameMap["wc-top-nav-link"]

const meta = {
  title: "UI/TopNavigation/Link",
  tags: ["autodocs"],
  component: "wc-top-nav-link",
  args: {
    innerHTML: "Primary link",
    href: "#",
  },
} satisfies Meta<LinkProps>

export default meta
type Story = StoryObj<LinkProps>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}
