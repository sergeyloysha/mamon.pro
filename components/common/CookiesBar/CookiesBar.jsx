import cn from 'classnames'

import styles from './CookiesBar.module.scss'
import { Button } from '@components/ui'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'

const CookiesBar = () => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()

  return (
    <div className={cn({
      [styles.cookiesBar]: true,
      [styles.cookiesBar_active]: !acceptedCookies,
    })}>
      <div className={styles.cookiesBar__inner}>
        <div className={styles.cookiesBar__text}>
          <p>We value your privacy. This website uses cookies to grow.</p>
        </div>
        <div className={styles.cookiesBar__buttons}>
          <div className={styles.cookiesBar__button}>
            <Button type="ghost" size="medium" color="black">Choose preference</Button>
          </div>
          <div className={styles.cookiesBar__button} onClick={() => onAcceptCookies()}>
            <Button size="medium">Accept all cookies</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiesBar
