import React from 'react';
import styles from './Hero.module.scss'
import { Container } from '@components/common'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.hero__inner}>
          <div className={styles.hero__content}>
            <div className={styles.hero__head}>
              <div className={styles.hero__heading}>
                <h1>Meet our team</h1>
              </div>
              <div className={styles.hero__description}>
                <p>We provide expertize in all stages of the product lifecycle and turn your best ideas into even better products.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
