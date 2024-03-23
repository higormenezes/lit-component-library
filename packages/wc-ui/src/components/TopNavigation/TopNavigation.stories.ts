import type { Meta, StoryObj } from "@storybook/web-components"

import "./TopNavigation"

import "./AppSwitch/AppSwitch"
import "./Logo/Logo"
import "./LinkList/LinkList"
import "./Link/Link"

type TopNavigationProps = HTMLElementTagNameMap["wc-top-nav"]

const meta = {
  title: "UI/TopNavigation/TopNavigation",
  tags: ["autodocs"],
  component: "wc-top-nav",
  args: {
    innerHTML: `
      <wc-top-nav-app-switch></wc-top-nav-app-switch>
      <wc-top-nav-logo></wc-top-nav-logo>
      <wc-top-nav-link-list>
        <wc-top-nav-link href="#" selected>Home</wc-top-nav-link>
        <wc-top-nav-link href="#">Recent</wc-top-nav-link>
        <wc-top-nav-link href="#">Spaces</wc-top-nav-link>
        <wc-top-nav-link href="#">Teams</wc-top-nav-link>
        <wc-top-nav-link href="#">Apps</wc-top-nav-link>
        <wc-top-nav-link href="#">Templates</wc-top-nav-link>
      </wc-top-nav-link-list>
    `,
  },
} satisfies Meta<TopNavigationProps>

export default meta
type Story = StoryObj<TopNavigationProps>

export const Default: Story = {}
