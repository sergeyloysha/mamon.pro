import React from 'react'
import Link from 'next/link'
import { Container } from '@components/common'
import styles from './Header.module.scss'
import { Logo } from '@components/icons'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <div className={styles.header__part}>
            <Link passHref href="/">
              <a className={styles.header__logo}>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={styles.header__part}>
            <div className={styles.header__nav}>
              <nav className={styles.nav}>
                <div className={styles.nav__list}>
                  <div className={styles.nav__item}>
                    <Link href="/team">
                      <a className={styles.nav__link}>team</a>
                    </Link>
                  </div>
                  <div className={styles.nav__item}>
                    <a className={styles.nav__link} href="mailto:hello@mamon.pro">hello@mamon.pro</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
