import React from 'react';
import styles from './Services.module.scss'
import { Container } from '@components/common'

const data = [{
  title: 'Development',
  description: 'We can turn designs into live products with clean code that is on par with todays standards.',
  stack: ['React', 'Next.js', 'Gatsby', 'Wordpress', 'ES5 / ES6+', 'HTML5', 'SCSS', 'Stylus', 'Node/Express', 'PHP']
}, {
  title: 'Design',
  description: 'We know every pixel is valuable and know how to make the most pretty and intuitive apps.',
  stack: ['User Intrface (UI)', 'User Experience (UX)', 'Product Design', 'Visual Design', 'Illustrations']
}, {
  title: 'Marketing',
  description: 'We help marketing teams build anything they can dream of',
  stack: ['HTML emails', 'Landing pages', 'Marketo integration', 'HubSpot integration', 'Eloqua integration']
}, {
  title: 'Quality Assurance',
  description: 'Our QA team ensures high standard of quality of products delivered.',
  stack: ['Usability testing', 'Performance testing', 'Manual testing', 'Automated testing', 'Unit testing', 'Regression testing']
}]

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services__inner}>
        <Container>
          <div className={styles.services__head}>
            <div className={styles.services__heading}>
              <h2>Wanna know what we can do for you?</h2>
            </div>
          </div>
          <div className={styles.services__content}>
            <div className={styles.services__list}>
              { data.map((item, index) =>
                <div className={styles.services__item} key={index}>
                  <div className={styles.service}>
                    <div className={styles.service__head}>
                      <div className={styles.service__heading}>
                        <h3>{ item.title }</h3>
                      </div>
                      <div className={styles.service__description}>
                        { item.description }
                      </div>
                    </div>
                    <div className={styles.service__stack}>
                      { item.stack.map((technology, index) =>
                        <span key={index}>{technology}</span>
                      ) }
                    </div>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;
