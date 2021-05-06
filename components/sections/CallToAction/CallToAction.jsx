import React from 'react'
import cn from 'classnames'
import { Container } from '@components/common'
import styles from './CallToAction.module.scss'

const CallToAction = ({ heading, description, children, color }) => {
  return (
    <div className={cn({
      [styles.cta]: true,
      [styles.cta_purple]: color === 'purple',
      [styles.cta_blue]: color === 'blue',
    })}>
      <Container>
        <div className={styles.cta__inner}>
          <div className={styles.cta__content}>
            <div className={styles.cta__head}>
              <div className={styles.cta__heading}>
                <h2>{ heading }</h2>
              </div>
              { description &&
                <div className={styles.cta__description}>
                  <p>{ description }</p>
                </div>
              }
            </div>
            <div className={styles.cta__control}>
              { children }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CallToAction;
