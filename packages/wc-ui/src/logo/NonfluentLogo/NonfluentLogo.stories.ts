import type { Meta, StoryObj } from "@storybook/web-components"

import "./NonfluentLogo"

type NonfluentLogoProps = HTMLElementTagNameMap["wc-nonfluent-logo"]

const meta = {
  title: "Logos/NonfluentLogo",
  tags: ["autodocs"],
  component: "wc-nonfluent-logo",
} satisfies Meta<NonfluentLogoProps>

export default meta
type Story = StoryObj<NonfluentLogoProps>

export const Default: Story = {}
