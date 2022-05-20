import React from "react"
import { Container } from "../Container/Container"
import styles from "./Payment.module.scss"
import paymentPNG from "../../assets/images/paymen.png"
import { SectionHead, SectionText, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import { RoundedLink } from "../RoundedLink/RoundedLink"

export const Payment = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={paymentPNG} alt="" />
        </div>
        <div className={styles.body}>
          <SectionHead className={styles.head}>03. WELCOME</SectionHead>
          <SectionTitle className={styles.title}>Lymcoin is Digital Cash You Can Spend Anywhere</SectionTitle>
          <SectionText className={styles.text}>
            Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform
            hosted by thousands of users around the world.
          </SectionText>
          <RoundedLink text={"contact us"} />
        </div>
      </Container>
    </div>
  )
}
