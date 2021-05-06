import { Container } from '@components/common';
import React from 'react';
import styles from './Testimonial.module.scss'

const Testimonial = ({ quote, name, position, thumb }) => {
  return (
    <div className={styles.testimonial}>
      <Container>
        <div className={styles.testimonial__inner}>
          <div className={styles.testimonial__content}>
            <div className={styles.testimonial__text}>
              {quote}
            </div>
            <div className={styles.testimonial__meta}>
              <div className={styles.testimonial__name}>{name}</div>
              <div className={styles.testimonial__position}>{position}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
