import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ArrowCircle } from '@components/icons'
import styles from './Secondary.module.scss'

const Secondary = ({ children, size, disabled, color }) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.button_small]: true,
        [styles.button_medium]: size === 'medium',
        [styles.button_large]: size === 'large',
        [styles.button_white]: color === 'white',
        [styles.button_red]: color === 'red',
        [styles.button_disabled]: disabled,
      })}
      disabled={disabled}
    >
      <span>{children}</span>
      <ArrowCircle />
    </button>
  )
}

Secondary.defaultProps = {
  size: 'large',
  disabled: false,
  color: 'black',
}

Secondary.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  color: PropTypes.oneOf(['black', 'white', 'red']),
  disabled: PropTypes.bool,
}

export default Secondary
