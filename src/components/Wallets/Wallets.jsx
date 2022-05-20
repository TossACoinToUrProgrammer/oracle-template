import React from "react"
import { Container } from "../Container/Container"
import { RoundedLink } from "../RoundedLink/RoundedLink"
import { SectionHead, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import styles from "./Wallets.module.scss"
import firstLogo from "../../assets/icons/wallets-1.svg"
import secondLogo from "../../assets/icons/wallets-2.svg"
import thirdLogo from "../../assets/icons/wallets-3.svg"
import fourthLogo from "../../assets/icons/wallets-4.svg"
import image from "../../assets/images/wallets.svg"

const cards = [
  {
    logo: fourthLogo,
    title: "Android Lymcoin Wallet",
    text: "Download",
  },
  {
    logo: secondLogo,
    title: "OSX Lymcoin Wallet",
    text: "Download",
  },
  {
    logo: thirdLogo,
    title: "Windows Lymcoin Wallet",
    text: "Download",
  },
  {
    logo: firstLogo,
    title: "Linux Lymcoin Wallet",
    text: "Download",
  },
]

export const Wallets = () => {
  return (
    <div className={styles.wrapper}>
      <Container wide className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="" />
        </div>
        <div className={styles.body}>
          <SectionHead className={styles.head}>06. WALLETS</SectionHead>
          <SectionTitle className={styles.title}>Lymcoin Wallets</SectionTitle>
          <div className={styles.buttons}>
            <RoundedLink text={"contact us"} />
            <RoundedLink text={"contact us"} theme="white" />
            <RoundedLink text={"contact us"} theme="white" />
            <RoundedLink text={"contact us"} theme="white" />
          </div>
          <div className={styles.cards}>
            {cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

const Card = ({ text, title, logo }) => (
  <div className={styles.card}>
    <div className={styles.cardLogo}>
      <img src={logo} alt="" />
    </div>
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardText}>{text}</div>
    </div>
  </div>
)
