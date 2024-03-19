import type { Meta, StoryObj } from "@storybook/web-components"

import "./PrimaryLink"

type PrimaryLinkProps = HTMLElementTagNameMap["wc-top-nav-primary-link"]

const meta = {
  title: "UI/TopNavigation/PrimaryLink",
  tags: ["autodocs"],
  component: "wc-top-nav-primary-link",
  args: {
    innerHTML: "Primary link",
    href: "#",
  },
} satisfies Meta<PrimaryLinkProps>

export default meta
type Story = StoryObj<PrimaryLinkProps>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}
