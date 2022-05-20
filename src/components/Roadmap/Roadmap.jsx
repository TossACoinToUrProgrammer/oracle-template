import React from "react"
import cn from "../../utils/helpers/classNames"
import { Container } from "../Container/Container"
import { SectionHead, SectionText, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import styles from "./Roadmap.module.scss"

const steps = [
  {
    isActive: true,
    date: "November 2017",
  },
  {
    isActive: true,
    text: "Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)",
    date: "January 2018",
  },
  {
    isActive: true,
    text: "Tracking services for different smart contract types",
    date: "March 2018",
    isBottom: false,
  },
  {
    isActive: false,
    text: "Release of a decentralized app for merchants / affiliates",
    date: "March 2019",
    isCircleActive: true,
  },
  {
    isActive: false,
    text: "Release of a decentralized app for affiliate networks",
    date: "May 2020",
  },
  {
    isActive: false,
    text: "Launch of the world's first decentralized affiliate network based on the HOQU platform",
    date: "September 2020",
  },
]

export const Roadmap = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <SectionHead className={styles.head}>04. ROADMAP</SectionHead>
          <SectionTitle className={styles.title}>Implementation Sheet</SectionTitle>
          <SectionText className={styles.text}>
            At Lymcoin we have one focus - creating a viable data marketplace to start returning value to token holders
            in the shortest time possible.
          </SectionText>
        </div>
        <div className={styles.roadMap}>
          <div className={styles.roadmapSteps}>
            {steps.map((step, i) => (
              <RoadmapStep key={step.date} {...step} isBottom={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

const RoadmapStep = ({ isActive, text, date, isBottom, isCircleActive }) => (
  <div className={cn(styles.stepWrapper, isActive && styles.isActive)}>
    <div className={cn(styles.stepCircle, isCircleActive && styles.activeCircle)} />
    <div className={styles.stepLine} />
    <div className={cn(styles.stepBody, isBottom && styles.bottom)}>
      <div className={styles.stepText}>{text}</div>
      <div className={styles.date}>{date}</div>
    </div>
  </div>
)
