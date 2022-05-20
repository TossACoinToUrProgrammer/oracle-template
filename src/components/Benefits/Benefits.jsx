import React from "react"
import { Container } from "../Container/Container"
import { SectionHead, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import styles from "./Benefits.module.scss"
import pieChart from "../../assets/icons/pie-chart.svg"
import objective from "../../assets/icons/objective.svg"
import clock from "../../assets/icons/clock.svg"
import suitcase from "../../assets/icons/suitcase.svg"

const cards = [
  {
    number: "01.",
    title: "Lymcoin Benefits",
    text: "Use Lymcoin to make instant",
    img: pieChart,
  },
  {
    number: "02.",
    title: "Lymcoin Benefits",
    text: "Use Lymcoin to make instant",
    img: suitcase,
  },
  {
    number: "03.",
    title: "Lymcoin Benefits",
    text: "Use Lymcoin to make instant",
    img: objective,
  },
  {
    number: "04.",
    title: "Lymcoin Benefits",
    text: "Use Lymcoin to make instant",
    img: clock,
  },
]

export const Benefits = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHead className={styles.head}>02. BENEFITS</SectionHead>
        <SectionTitle className={styles.title}>Lymcoin Benefits</SectionTitle>
        <div className={styles.cards}>
          {cards.map((card) => (
            <BenefiCard card={card} key={card.number} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const BenefiCard = ({ card }) => (
  <div className={styles.card}>
    <div className={styles.cardNum}>{card.number}</div>
    <div className={styles.cardBody}>
      <div className={styles.cardImage}>
        <img src={card.img} alt="" />
      </div>
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.cardText}>{card.text}</div>
    </div>
  </div>
)
