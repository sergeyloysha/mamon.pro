import React from 'react'
import cn from 'classnames'
import styles from './Features.module.scss'
import { Container } from '@components/common'

const messages = [{
  text: 'Hello Sergey, how things are going?',
  type: 'in',
}, {
  text: 'Hey, everything is going well. We’re already delivered the design.',
  type: 'out',
}, {
  text: 'Coooool, let me check.',
  type: 'in',
}, {
  text: 'Sure.',
  type: 'out',
}]

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.features__inner}>
        <Container>
          <div className={styles.features__head}>
            <div className={styles.features__heading}>
              <h2>In addition to strong expertise, we offer:</h2>
            </div>
          </div>

          <div className={styles.features__list}>
            <div className={styles.features__item}>
              <div className={styles.communication}>
                <div className={styles.communication__inner}>
                  <div className={styles.communication__part}>
                    <div className={styles.communication__head}>
                      <div className={styles.communication__heading}>
                        <h3>High-level communication</h3>
                      </div>
                      <div className={styles.communication__description}>
                        <p>So many good teams fail because of poor planning and lack of communications. We keep you aligned with our team - every day, week and month. So you know what’s going on at every of your project.</p>
                      </div>
                      <div className={styles.communication__icons}>
                        <div className={styles.communication__icon}></div>
                        <div className={styles.communication__icon}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.communication__part}>
                    <div className={styles.chat}>
                      <div className={styles.chat__list}>
                        { messages.map((item, index) => 
                          <div className={styles.chat__item} key={index}>
                            <div className={cn({
                              [styles.chat__message]: true,
                              [styles.chat__message_in]: item.type === 'in',
                              [styles.chat__message_out]: item.type === 'out',
                            })}>{item.text}</div>
                          </div>
                        ) }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Features;
