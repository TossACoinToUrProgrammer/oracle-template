import React from "react"
import { SectionHead, SectionText, SectionTitle } from "../SectionHeaderComponents/SectionHeaderComponents"
import styles from "./Network.module.scss"
import firstLogo from "../../assets/images/net-1.png"
import secondLogo from "../../assets/images/net-2.png"
import thirdLogo from "../../assets/images/net-3.png"
import earthSVG from "../../assets/images/net-earth.svg"
import { Container } from "../Container/Container"
import sfs from "../../assets/icons/image2vector.svg"

export const Network = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shapeWrapper}>
        <Container className={styles.body}>
          <SectionHead className={styles.head}>05. NETWORK</SectionHead>
          <SectionTitle className={styles.title}>Growing Global Network</SectionTitle>
          <SectionText className={styles.text}>
            Lymcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have
            adopted our coin already. There is much more to come. Stay tuned.
          </SectionText>

          <div className={styles.nums}>
            <div className={styles.num}>
              50<span className={styles.red}>+</span>
              <div className={styles.numText}>Exchanges</div>
            </div>
            <div className={styles.num}>
              180<span className={styles.red}>+</span>
              <div className={styles.numText}>Companies</div>
            </div>
          </div>
          <div className={styles.logos}>
            <img src={firstLogo} alt="" />
            <img src={secondLogo} alt="" />
            <img src={thirdLogo} alt="" />
          </div>
          <Shape />
        </Container>
      </div>
      <div className={styles.earthImg}>
        <img src={earthSVG} alt="" />
      </div>
    </div>
  )
}

const Shape = () => (
  <svg class="svg">
    <clipPath id="path2" clipPathUnits="objectBoundingBox">
      <path d="M0.614,0.005 C0.612,0.005,0.605,0.007,0.599,0.008 C0.593,0.009,0.474,0.03,0.336,0.054 C0.197,0.078,0.082,0.098,0.081,0.099 C0,0.142,-0.024,0.292,0.022,0.466 C0.026,0.48,0.192,0.934,0.198,0.947 C0.218,0.989,0.258,1,0.293,1 C0.301,0.999,0.955,0.711,0.962,0.707 C0.997,0.686,1,0.626,0.989,0.578 C0.985,0.569,0.706,0.056,0.698,0.043 C0.681,0.016,0.645,0,0.614,0.005"></path>
    </clipPath>
  </svg>
)
