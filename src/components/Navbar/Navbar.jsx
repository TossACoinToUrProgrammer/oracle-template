import React from "react"
import cn from "../../utils/helpers/classNames"
import { Container } from "../Container/Container"
import styles from "./Navbar.module.scss"

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container wide>
        <nav className={styles.navbar}>
          <a className={styles.link} href="/">
            Home
          </a>
          <a className={styles.link} href="/">
            Resources
          </a>
          <a className={styles.link} href="/">
            Team
          </a>
          <a className={styles.link} href="/">
            Feature
          </a>
          <a className={styles.link} href="/">
            Community
          </a>
          <a className={styles.link} href="/">
            Downloads
          </a>
          <a className={cn(styles.link, styles.rounded)} href="/">
            Contact us
          </a>
        </nav>
      </Container>
    </div>
  )
}
