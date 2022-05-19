import React from "react"
import styles from "./Container.module.scss"
import cn from "../../utils/helpers/classNames"

export const Container = ({ className, children, wide = false }) => {
  return <div className={cn(className, styles.container, wide && styles.wide)}>{children}</div>
}
