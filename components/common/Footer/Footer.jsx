import React from 'react'
import { Container } from '@components/common'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.line}>
        <div className={styles.line__list}>
          {[...Array(25)].map(i =>
            <div className={styles.line__item} key={i}>
              <span>mamon</span>
            </div>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footer__inner}>
            <div className={styles.footer__head}>
              <div className={styles.footer__heading}>Want to work with us?</div>
              <div className={styles.footer__text}><a href="mailto:hello@mamon.pro">hello@mamon.pro</a></div>
            </div>

            <div className={styles.footer__bottom}>
              <div className={styles.footer__copy}>
                &copy; { new Date().getFullYear() } Mamon / st. September 17th, Grodno, Belarus
              </div>
              <div className={styles.footer__networks}>
            
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
