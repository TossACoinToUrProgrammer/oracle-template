import React from "react"
import { Container } from "../Container/Container"
import { SectionHead, SectionText, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import styles from "./WelcomeSection.module.scss"
import welcomeSVG from "../../assets/images/welcome.svg"

export const WelcomeSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container wide className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={welcomeSVG} alt="" />
        </div>
        <div className={styles.body}>
          <SectionHead className={styles.head}>01. WELCOME</SectionHead>
          <SectionTitle className={styles.title}>Lymcoin is Digital Cash You Can Spend Anywhere</SectionTitle>
          <SectionText className={styles.text}>
            Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform
            hosted by thousands of users around the world.
          </SectionText>
        </div>
      </Container>
    </div>
  )
}
