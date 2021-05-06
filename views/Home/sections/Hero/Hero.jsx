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
                <h1>We build top-notch custom web &amp; mobile solutions</h1>
              </div>
              <div className={styles.hero__description}>
                <p>From SaaS and enterprise software to marketing websites, we create digital experiences that people love.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
