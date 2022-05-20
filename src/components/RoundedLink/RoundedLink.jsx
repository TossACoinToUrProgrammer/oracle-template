import React from "react"
import cn from "../../utils/helpers/classNames"
import styles from "./RoundedLink.module.scss"

// theme: "yellow" | "white" | "dark"
export const RoundedLink = ({ path = "/", text, theme = "yellow" }) => {
  return (
    <a href={path} className={cn(styles.link, styles[theme])}>
      {text}
    </a>
  )
}
