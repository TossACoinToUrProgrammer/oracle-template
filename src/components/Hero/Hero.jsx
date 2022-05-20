import React from "react"
import { Container } from "../Container/Container"
import { RoundedLink } from "../RoundedLink/RoundedLink"
import styles from "./Hero.module.scss"
import Phones from "../../assets/images/mobiles.png"

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Container wide className={styles.container}>
        <div className={styles.body}>
          <h1 className={styles.title}>Secure and Anonymous Cryptocurrency </h1>
          <div className={styles.text}>Lymcoin is a decentralized, hybrid blockhain that is fully open-source. </div>
          <div className={styles.buttons}>
            <RoundedLink path="/" theme="yellow" text="contact us" />
            <RoundedLink path="/" theme="dark" text="contact us" />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={Phones} alt="" />
        </div>
      </Container>
      <Shape />
    </div>
  )
}

const Shape = () => (
  <svg class="svg">
    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0,0 H1 C1,0.391,1,0.609,1,1 C0.73,0.525,0.401,1,0,0.812 V0"></path>
    </clipPath>
  </svg>
)
