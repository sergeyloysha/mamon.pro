import React from 'react';
import styles from './Staff.module.scss'
import { Container } from '@components/common'

const data = [{
  firstName: 'Sergey',
  lastName: 'Loysha',
  department: 'Development',
  thumb: '/images/staff/sergey-loysha.jpg',
}, {
  firstName: 'Evgeny',
  lastName: 'Yakimovich',
  department: 'Development',
  thumb: '/images/staff/evgeny-yakimovich.jpg',
}, {
  firstName: 'Andrey',
  lastName: 'Pitunov',
  department: 'Development',
  thumb: '/images/staff/andrey-pitunov.png',
}, {
  firstName: 'Andrey',
  lastName: 'Yatsenko',
  department: 'Development',
  thumb: '/images/staff/andrey-yatsenko.png',
}, {
  firstName: 'Yuliya',
  lastName: 'Yatsenko',
  department: 'Quality Assurance',
  thumb: '/images/staff/yuliya-yatsenko.png',
}]

const Staff = () => {
  return (
    <div className={styles.staff}>
      <div className={styles.staff__inner}>
        <Container>
          <div className={styles.staff__list}>
            {data.map(item =>
              <div className={styles.staff__item}>
                <div className={styles.employer}>
                  <div className={styles.employer__inner}>
                    <div className={styles.employer__thumb}>
                      <img src={item.thumb} alt={`${item.firstName} ${item.lastName}`}/>
                    </div>
                    <div className={styles.employer__meta}>
                      <div className={styles.employer__name}>{item.firstName}</div>
                      <div className={styles.employer__department}>{item.department}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.staff__item}>
              <a href="mailto:hr@mamon.pro" className={styles.slot}>
                <div className={styles.slot__inner}>
                  <div className={styles.slot__text}>Join the team</div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Staff;
