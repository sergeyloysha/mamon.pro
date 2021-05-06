import React from 'react'

import { CookiesBar, Header, Footer } from '@components/common'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__header}>
        <Header />
      </div>
      <main className={styles.layout__main}>
        {children}
      </main>
      <div className={styles.layout__footer}>
        <Footer />
      </div>

      <CookiesBar />
    </div>
  )
}

export default Layout
