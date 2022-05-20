import cn from "../../utils/helpers/classNames"
import styles from "./SectionHeader.module.scss"

export const SectionHead = ({ children, className }) => {
  return <div className={cn(styles.head, className)}>{children}</div>
}

export const SectionTitle = ({ children, className }) => {
  return <h2 className={cn(styles.title, className)}>{children}</h2>
}

export const SectionText = ({ children, className }) => {
  return <p className={cn(styles.text, className)}>{children}</p>
}
