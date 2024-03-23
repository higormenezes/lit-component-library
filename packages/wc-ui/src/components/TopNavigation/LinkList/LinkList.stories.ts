import type { Meta, StoryObj } from "@storybook/web-components"

import "./LinkList"
import "../Link/Link"

type LinkListProps = HTMLElementTagNameMap["wc-top-nav-link-list"]

const meta = {
  title: "UI/TopNavigation/LinkList",
  tags: ["autodocs"],
  component: "wc-top-nav-link-list",
  args: {
    innerHTML: `
      <wc-top-nav-link href="#" selected>Home</wc-top-nav-link>
      <wc-top-nav-link href="#">Recent</wc-top-nav-link>
      <wc-top-nav-link href="#">Spaces</wc-top-nav-link>
      <wc-top-nav-link href="#">Teams</wc-top-nav-link>
      <wc-top-nav-link href="#">Apps</wc-top-nav-link>
      <wc-top-nav-link href="#">Templates</wc-top-nav-link>
    `,
  },
} satisfies Meta<LinkListProps>

export default meta
type Story = StoryObj<LinkListProps>

export const Default: Story = {}
