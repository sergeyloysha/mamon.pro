import React from 'react';
import styles from './Stats.module.scss'
import { Container } from '@components/common'

const data = [{
  count: 43,
  emoji: '💻',
  text: 'Projects launched',
}, {
  count: 7,
  emoji: '🌏',
  text: 'Countries represented',
}, {
  count: 4,
  emoji: '🤘🏻',
  text: 'Years in business',
}, {
  count: 5,
  emoji: '🥷🏻',
  text: 'In-house developers',
}]

const Hero = () => {
  return (
    <div className={styles.stats}>
      <Container>
        <div className={styles.stats__inner}>
          <div className={styles.stats__list}>
            { data.map((item, index) =>
              <div className={styles.stats__item} key={index}>
                <div className={styles.stat}>
                  <div className={styles.stat__count}>{item.count < 10 ? `0${item.count}` : item.count}</div>
                  <div className={styles.stat__text}><span>{item.emoji}</span> {item.text}</div>
                </div>
              </div>  
            ) }
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
