import React from "react"
import { createComponent } from "@lit/react"
import { WCButton as _WCButton } from "./Button"

export const WCButton = createComponent({
  tagName: "wc-button",
  elementClass: _WCButton,
  react: React,
  events: {},
})
